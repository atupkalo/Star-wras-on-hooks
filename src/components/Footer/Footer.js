import React from "react";
import { useContext } from "react";
import MainContext from "../../store/MainContext";

import "./Footer.css";

function Footer() {
  const ctx = useContext(MainContext);
  const lang = ctx.language;
  return (
    <footer className={"footer"}>
      <h3 className={"footer-title"}>{lang.footerTitle.footertitle}</h3>
    </footer>
  );
}
export default Footer;
