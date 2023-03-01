import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="list-item" onClick={props.clickHandler}>
      <div className="hero-wrap">
        <div className="hero-img-wrap">
          <img src={props.src} alt="" className="hero-img" />
        </div>
        <div className="hero-name">{props.itemName}</div>
        <button id={props.id} className="view-btn">
          VIEW
        </button>
      </div>
    </div>
  );
}
export default ListItem;
