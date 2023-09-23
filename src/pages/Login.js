import { useContext } from "react";
import "../components/styles.css";
import AuthContext from "../context/AuthContext";

function Login() {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="pagecontainer">
      <div className="loginsignup">
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
    </div>
  );
}

export default Login;
