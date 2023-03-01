import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">PEOPLE</Link>
        </li>
        <li className="nav-item">
          <Link to="Planets">PLANETS</Link>
        </li>
        <li className="nav-item">
          <Link to="Ships">STARSHIPS</Link>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
