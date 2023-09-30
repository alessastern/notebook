import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
    fetch("http://127.0.0.1:8000/api/auth/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((response) => {
        if (response.status === 201) loginUser(e);
        else if (response.status === 400)
          throw new Error("either password or username are invalid");
        else throw new Error("something went wrong");
      })
      .catch((error) => alert(error));
  };

  const loginUser = (e) => {
    const responseCheck = (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.json().then((err) => Promise.reject(err.detail));
      }
    };
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/auth/jwt/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then(responseCheck)
      .then((data) => {
        setUser(jwtDecode(data.access));
        setAuthTokens(data);
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const logoutUser = () => {
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const updateToken = () => {
    fetch("http://127.0.0.1:8000/api/auth/jwt/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens.refresh,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          logoutUser();
        }
      })
      .then((data) => {
        setUser(jwtDecode(data.access));
        setAuthTokens(data);
        localStorage.setItem("authTokens", JSON.stringify(data));
      });
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    signupUser: signupUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (authTokens) updateToken();
    }, 240000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
