import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);

  const loginUser = (e) => {
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
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else throw new Error("something went wrong");
      })
      .then((data) => {
        setUser(jwtDecode(data.access));
        setAuthTokens(data);
      })
      .then(() => console.log(user))
      .catch((error) => alert(error));
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
