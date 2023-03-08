import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../../store/MainContext";

import "./ErrorPage.css";

function ErrorPage() {
  const history = useNavigate();

  const ctx = useContext(MainContext);
  const lang = ctx.language.error;

  function onePageBack() {
    history(-1);
  }
  return (
    <div className="error-wrap">
      <div className="error-inner-wrap">
        <div className="error-404">404</div>
        <div className="error-desc">{lang.errortitle}</div>
        <div className="error-btns">
          <button onClick={onePageBack} className="error-btn">
            {lang.errorbtnprev}
          </button>
          <button className="error-btn">
            <Link className="error-link" to={"/"}>
              {lang.errorbtnhome}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
