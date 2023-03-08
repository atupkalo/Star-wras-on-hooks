import { Link } from "react-router-dom";
import { useContext } from "react";

import MainContext from "../../store/MainContext";

import "./Greeting.css";

function Greetings(props) {
  const ctx = useContext(MainContext);
  const lang = ctx.language.home;

  return (
    <div className="greet-wrap">
      <div className="greet">
        <div className="greet-text-top">{lang.homefarfar}</div>
        <div className="sw-logo"></div>
        <div className="greet-text">
          <p className="greet-text-inner">{lang.hometext}</p>
        </div>
      </div>
      <div className={`greet-warning greet-warning-${ctx.theme}`}>
        <p>{lang.homeworning}</p>
        <p>
          <Link className={`home-loging home-loging-${ctx.theme}`} to={"Login"}>
            {lang.homelogin}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Greetings;
