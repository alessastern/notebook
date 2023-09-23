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
          style={{
            paddingTop: "10rem",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          welcome to your notebook!
        </p>

        {user ? null : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              please,
              <div style={{ marginRight: "20px" }}>
                <Link
                  key="signup"
                  to="/registration"
                  className="nav"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                  }}
                >
                  signup
                </Link>
              </div>
              or
              <div>
                <Link
                  key="login"
                  to="/login"
                  className="nav"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                  }}
                >
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
