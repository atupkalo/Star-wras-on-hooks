import { Link } from "react-router-dom";

import "./Nav.css";

function Nav(props) {
  const navPath = ["/", "Planets", "Ships"];
  return (
    <div className="nav">
      <ul className="nav-list">
        {props.navItems.map((elem, i) => {
          return (
            <li key={i} className="nav-item">
              <Link to={navPath[i]}>{elem}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Nav;
