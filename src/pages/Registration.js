import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import SomeError from "../components/SomeError";
import { useState } from "react";

function Registration() {
  const { signupUser, error, setError } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  useEffect(() => setError(null), []);

  return (
    <div className="pagecontainer">
      <div className="loginsignup">
        <p className="title">sign up</p>
        {error ? <SomeError error={error} /> : null}
        <form
          id="signup"
          onSubmit={(e) => {
            e.preventDefault();
            password === confirmpassword
              ? signupUser(e)
              : setError("passwords do not match!");
            setConfirmPassword("");
            setPassword("");
          }}
        >
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            name="confirmpassword"
            className="inputs"
            style={{ width: "100%", marginTop: "10px" }}
            type="password"
            placeholder="confirm your password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </form>
        <div className="modalfooter">
          <button
            form="signup"
            className="button-save"
            style={{ marginTop: "10px" }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
