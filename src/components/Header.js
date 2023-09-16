import "./styles.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headers">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
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
      </div>
    </div>
  );
}
export default Header;
