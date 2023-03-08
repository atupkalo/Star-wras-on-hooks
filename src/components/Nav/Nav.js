import { Link } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../../store/MainContext";

import "./Nav.css";

function Nav(props) {
  const ctx = useContext(MainContext);
  const logStatus = ctx.authFlag;
  const lang = ctx.language;
  const navDisplay = [];

  if (logStatus) {
    navDisplay.push(...Object.values(lang.logedIn));
  } else {
    navDisplay.push(...Object.values(lang.unLoged));
  }

  const navPath = navDisplay.slice();
  navPath.splice(0, 1, "/");

  function logoutHandler(e) {
    e.preventDefault();
    ctx.logOut(true);
  }
  return (
    <div className="nav">
      <ul className="nav-list">
        {navDisplay.map((elem, i) => {
          return (
            <li key={i} className="nav-item">
              <Link to={navPath[i]}>{elem}</Link>
            </li>
          );
        })}
        <li className="nav-item" onClick={logoutHandler}>
          {logStatus ? "logout" : null}
        </li>
      </ul>
    </div>
  );
}
export default Nav;
