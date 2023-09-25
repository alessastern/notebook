import { useContext } from "react";
import "../components/styles.css";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="pagecontainer">
      <div className="loginsignup">
        <p className="title">log in</p>
        <form id="login" onSubmit={loginUser}>
          <input
            name="username"
            className="inputs"
            style={{ width: "100%" }}
            type="text"
            placeholder="username"
          ></input>
          <input
            name="password"
            className="inputs"
            style={{ width: "100%", marginTop: "10px" }}
            type="password"
            placeholder="password"
          ></input>
        </form>
        <div className="modalfooter">
          <button
            form="login"
            className="button-save"
            style={{ marginTop: "10px" }}
          >
            Log in
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="plaintext">don't have an account yet? </p>

        <Link
          key="signup"
          to="/registration"
          className="nav"
          style={{ marginLeft: "5px" }}
        >
          signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
