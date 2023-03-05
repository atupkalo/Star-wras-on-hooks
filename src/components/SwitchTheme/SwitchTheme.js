import Switch from "react-switch";
import { useContext, useState } from "react";

import MainContext from "../../store/MainContext";
import "./SwitchTheme.css";

function SwitchTheme(props) {
  const ctx = useContext(MainContext);

  function languageChangeHandler(e) {
    if (e.target.id === "en") {
      ctx.switchLanguage(true);
    } else {
      ctx.switchLanguage(false);
    }
  }

  return (
    <div className="switch-wrap">
      <div className="switch-theme">
        <div className={`theme-name theme-name-${props.theme}`}>
          {props.theme}
        </div>
        <Switch
          onChange={props.themeChange}
          offColor={"#dcdcdc"}
          onColor={"#782f7e"}
          checked={props.theme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
      <div className="swith-language">
        <div onClick={languageChangeHandler} id={"en"} className={"language"}>
          EN
        </div>
        <div id={"ukr"} onClick={languageChangeHandler} className={"language"}>
          UKR
        </div>
      </div>
    </div>
  );
}

export default SwitchTheme;
