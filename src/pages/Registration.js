import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useState } from "react";

function Registration() {
  const { signupUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  function PassWordError() {
    return <p className="errormessage">passwords do not match!</p>;
  }

  return (
    <div className="pagecontainer">
      <div className="loginsignup">
        <p className="title">sign up</p>
        {show ? <PassWordError /> : null}
        <form
          id="signup"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.password.value === e.target.confirmpassword.value
              ? signupUser(e)
              : setShow(true);
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
