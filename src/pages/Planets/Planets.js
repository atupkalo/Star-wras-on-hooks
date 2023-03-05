import { useState, useContext } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import MainContext from "../../store/MainContext";

function Planets(props) {
  const [cardValues, setCardValues] = useState([]);
  const [cardName, setCardName] = useState("");
  const ctx = useContext(MainContext);
  const cardKyes = Object.values(ctx.language.cardPlanets);

  function passingDataHandler(listItemData) {
    setCardValues([
      listItemData[0].population,
      listItemData[0].diameter,
      listItemData[0].climate,
      listItemData[0].terrain,
    ]);
    setCardName(listItemData[0].name);
  }
  return (
    <main className="people">
      <h3 className={`main-title main-title-${ctx.theme}`}>
        {props.mainTitle}
      </h3>
      <div className="container">
        <List section={"planets"} passingData={passingDataHandler} />
        <Card
          classIcon={"person-icon"}
          name={cardName}
          keys={cardKyes}
          values={cardValues}
        />
      </div>
    </main>
  );
}
export default Planets;
