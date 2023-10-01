import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import SomeError from "../components/SomeError";

function Registration() {
  const { signupUser, error, setError } = useContext(AuthContext);

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
            e.target.password.value === e.target.confirmpassword.value
              ? signupUser(e)
              : setError("passwords do not match!");
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
          ></input>
          <input
            name="confirmpassword"
            className="inputs"
            style={{ width: "100%", marginTop: "10px" }}
            type="password"
            placeholder="confirm your password"
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
