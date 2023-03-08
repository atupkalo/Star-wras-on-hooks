import Authorization from "../../components/Authorization/Authorization";

import { useContext } from "react";
import MainContext from "../../store/MainContext";

function Login(props) {
  const ctx = useContext(MainContext);
  const reqClass = ctx.reqClass;

  return (
    <main className="login-wrap">
      <h3 className={`main-title main-title-${ctx.theme}`}>
        {props.mainTitle}
      </h3>
      <Authorization massage={ctx.massage} display={reqClass} />
    </main>
  );
}
export default Login;
