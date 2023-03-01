import { useState } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";

function Ships() {
  const [listItem, setListItem] = useState([]);

  function passingDataHandler(listItemData) {
    setListItem(listItemData);
  }
  return (
    <main className="people">
      <h3 className="main-title">Ships</h3>
      <div className="container">
        <List section={"starships"} passingData={passingDataHandler} />
        {listItem.map((elem, i) => {
          return (
            <Card
              classIcon={"person-icon"}
              key={i}
              name={elem.name}
              descItem_1={"Passengers capacity"}
              height={elem.passengers}
              descItem_2={"Cargo capacity'"}
              gender={elem.cargo_capacity}
              descItem_3={"Starship class"}
              hair_color={elem.starship_class}
              descItem_4={"Model"}
              eye_color={elem.model}
            />
          );
        })}
      </div>
    </main>
  );
}
export default Ships;
