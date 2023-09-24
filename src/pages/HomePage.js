import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="pagecontainer">
        <p
          className="plaintext"
          style={{
            paddingTop: "10rem",
            textAlign: "center",
          }}
        >
          welcome to your notebook!
        </p>

        {user ? null : (
          <>
            <div
              className="plaintext"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              please,
              <div style={{ marginRight: "20px" }}>
                <Link key="signup" to="/registration" className="nav">
                  signup
                </Link>
              </div>
              or
              <div>
                <Link key="login" to="/login" className="nav">
                  login
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
