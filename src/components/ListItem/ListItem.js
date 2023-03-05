import { useContext } from "react";

import MainContext from "../../store/MainContext";

import "./ListItem.css";

function ListItem(props) {
  const ctx = useContext(MainContext);
  const lang = ctx.language;
  return (
    <div
      className={`list-item list-item-${ctx.theme}`}
      onClick={props.clickHandler}
    >
      <div className="hero-wrap">
        <div className="hero-img-wrap">
          <img src={props.src} alt="" className="hero-img" />
        </div>
        <div className={`hero-name-${"dark"}`}>{props.itemName}</div>
        <button id={props.id} className={`view-btn view-btn-${ctx.theme}`}>
          {lang.btns.btn_view}
        </button>
      </div>
    </div>
  );
}
export default ListItem;
