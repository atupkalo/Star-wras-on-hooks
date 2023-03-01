import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-left-wrap">
          <div className={"card-left-pic-wrap" + " " + props.classIcon}></div>
          <div className="card-left-name">{props.name}</div>
        </div>
      </div>
      <div className="card-right">
        <ul className="desc-list">
          <li className="dec-item">
            <span className="decs-item-span">{props.descItem_1}</span>
            {props.height}
          </li>
          <li className="dec-item">
            <span className="decs-item-span">{props.descItem_2}</span>
            {props.gender}
          </li>
          <li className="dec-item">
            <span className="decs-item-span">{props.descItem_3}</span>
            {props.hair_color}
          </li>
          <li className="dec-item">
            <span className="decs-item-span">{props.descItem_4}</span>
            {props.eye_color}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Card;
