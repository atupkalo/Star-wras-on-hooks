import { useState, useContext } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import MainContext from "../../store/MainContext";

function Ships(props) {
  const [cardValues, setCardValues] = useState([]);
  const [cardName, setCardName] = useState("");
  const ctx = useContext(MainContext);
  const cardKyes = Object.values(ctx.language.cardShips);

  function passingDataHandler(listItemData) {
    setCardValues([
      listItemData[0].passengers,
      listItemData[0].cargo_capacity,
      listItemData[0].model,
      listItemData[0].starship_class,
    ]);
    setCardName(listItemData[0].name);
  }
  return (
    <main className="people">
      <h3 className={`main-title main-title-${ctx.theme}`}>
        {props.mainTitle}
      </h3>
      <div className="container">
        <List section={"starships"} passingData={passingDataHandler} />
        <Card
          classIcon={"ship-icon"}
          name={cardName}
          keys={cardKyes}
          values={cardValues}
        />
      </div>
    </main>
  );
}
export default Ships;
