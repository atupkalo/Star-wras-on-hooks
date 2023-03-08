import React from "react";
import { useContext, useState } from "react";

import Nav from "../Nav/Nav";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import MainContext from "../../store/MainContext";

import "./Header.css";

function Header() {
  const ctx = useContext(MainContext);
  const [flag, setFlag] = useState(true);
  const lang = ctx.language;

  function themeChangeHandler() {
    flag && setFlag(false);
    !flag && setFlag(true);
    ctx.switchTheme(flag);
  }

  return (
    <header className={`header header-${ctx.theme}`}>
      <div className="header-container">
        <div className="top-menu">
          <Nav />
          <SwitchTheme theme={ctx.theme} themeChange={themeChangeHandler} />
        </div>
        <div className="title-wrap">
          <h1 className={"header-title"}>{lang.headerTitle.headertitle}</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
