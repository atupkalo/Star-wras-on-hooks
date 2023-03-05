import { useState, useContext } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import MainContext from "../../store/MainContext";

function People(props) {
  const [cardValues, setCardValues] = useState([]);
  const [cardName, setCardName] = useState("");
  const ctx = useContext(MainContext);
  const cardKyes = Object.values(ctx.language.cardPeople);

  function passingDataHandler(listItemData) {
    setCardValues([
      listItemData[0].height,
      listItemData[0].gender,
      listItemData[0].hair_color,
      listItemData[0].eye_color,
    ]);
    setCardName(listItemData[0].name);
  }

  return (
    <main className="people">
      <h3 className={`main-title main-title-${ctx.theme}`}>
        {props.mainTitle}
      </h3>
      <div className="container">
        <List section={"people"} passingData={passingDataHandler} />
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
export default People;
