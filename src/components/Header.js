import "./styles.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="headers">
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "3rem" }}>
          <NavLink
            key="homepage"
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "rgb(255, 227, 223)",
                  }
                : { textDecoration: "none", color: "rgb(255, 227, 223)" }
            }
          >
            home
          </NavLink>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <NavLink
            key="notes"
            to="/notes"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "rgb(255, 227, 223)",
                  }
                : { textDecoration: "none", color: "rgb(255, 227, 223)" }
            }
          >
            notes
          </NavLink>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <NavLink
            key="images"
            to="/images"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "rgb(255, 227, 223)",
                  }
                : { textDecoration: "none", color: "rgb(255, 227, 223)" }
            }
          >
            images
          </NavLink>
        </div>

        <div className="dropdown1">
          <span className="loginButton">
            {`Hello${user ? ", " + user.username : ", guest"}`}
          </span>
          <div className="droprowncontent">
            {user ? (
              <div>
                <Link //onClick= {logout}
                  className="nav"
                >
                  logout
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <Link key="signup" to="/registration" className="nav">
                    signup
                  </Link>
                </div>
                <div>
                  <Link key="login" to="/login" className="nav">
                    log in
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
