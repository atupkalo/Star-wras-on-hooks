import { useState } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";

function Planets() {
  const [listItem, setListItem] = useState([]);

  function passingDataHandler(listItemData) {
    setListItem(listItemData);
  }
  console.log(listItem);
  return (
    <main className="people">
      <h3 className="main-title">Planets</h3>
      <div className="container">
        <List section={"planets"} passingData={passingDataHandler} />
        {listItem.map((elem, i) => {
          return (
            <Card
              classIcon={"person-icon"}
              key={i}
              name={elem.name}
              descItem_1={"Population"}
              height={elem.population}
              descItem_2={"Diameter"}
              gender={elem.diameter}
              descItem_3={"Climate"}
              hair_color={elem.climate}
              descItem_4={"Terrain type"}
              eye_color={elem.terrain}
            />
          );
        })}
      </div>
    </main>
  );
}
export default Planets;
