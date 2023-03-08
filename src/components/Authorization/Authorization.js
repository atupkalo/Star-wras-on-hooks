import { useRef, useContext } from "react";
import MainContext from "../../store/MainContext";

import "./Authorization.css";

function Authorization(props) {
  const ctx = useContext(MainContext);
  const login = useRef(null);
  const password = useRef(null);
  const formReset = useRef();

  function doLogin(e) {
    e.preventDefault();
    const logData = [login.current.value, password.current.value];
    ctx.switchLogs(logData);
    formReset.current.reset();
  }

  return (
    <div className="form-wrap">
      <div className={`form-desc form-desc-${ctx.theme}`}>
        This is a training project in order to login simplly use{" "}
        <strong>admin </strong>as the login and <strong>12345</strong> as the
        password
      </div>
      <form
        action="#"
        ref={formReset}
        className={`login-form login-form-${ctx.theme}`}
      >
        <div className={`login-massage massage-${props.display}`}>
          {props.massage}
        </div>
        <div className={`inputs inputs-${props.display}`}>
          <input
            type="text"
            ref={login}
            className={`login-input login-input-${ctx.theme}`}
            placeholder="LOGIN"
          />
          <input
            type="text"
            ref={password}
            className={`login-input login-input-${ctx.theme}`}
            placeholder="PASSWORD"
          />
          <input
            type="submit"
            onClick={doLogin}
            className={`login-btn login-btn-${ctx.theme}`}
            value="LOGIN"
          />
        </div>
      </form>
    </div>
  );
}
export default Authorization;
