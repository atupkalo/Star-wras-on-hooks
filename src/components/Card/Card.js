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
      <div className="card-right">
        <ul className="desc-list">
          {values.map((elem, i) => {
            return (
              <li key={i} className={`desc-item desc-item-${ctx.theme}`}>
                <span className="decs-item-span">{keys[i]}</span>
                {values[i]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Card;
