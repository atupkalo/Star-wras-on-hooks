import { useContext } from "react";

import MainContext from "../../store/MainContext";
import "./Card.css";

function Card(props) {
  const ctx = useContext(MainContext);
  const keys = props.keys;
  const values = props.values;

  return (
    <div className={`card card-${ctx.theme}`}>
      <div className="card-left">
        <div className="card-left-wrap">
          <div className={`card-left-pic-wrap ${props.classIcon}`}></div>
          <div className={`card-left card-left-${ctx.theme}`}>{props.name}</div>
        </div>
      </div>
      <ul className="desc-list">
        {values.map((elem, i) => {
          return (
            <li key={i} className={"desc-item"}>
              <div className="decs-item-span">{keys[i]}</div>
              <div className={`desc-item-data desc-item-data-${ctx.theme}`}>
                {values[i]}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Card;
