import { useState } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";

function People(props) {
  const [listItem, setListItem] = useState([]);

  function passingDataHandler(listItemData) {
    setListItem(listItemData);
  }

  return (
    <main className="people">
      <h3 className="main-title">People</h3>
      <div className="container">
        <List section={"people"} passingData={passingDataHandler} />
        {listItem.map((elem, i) => {
          return (
            <Card
              classIcon={"person-icon"}
              key={i}
              name={elem.name}
              descItem_1={"Height"}
              height={elem.height}
              descItem_2={"Gender"}
              gender={elem.gender}
              descItem_3={"Heir color"}
              hair_color={elem.hair_color}
              descItem_4={"Eyes color"}
              eye_color={elem.eye_color}
            />
          );
        })}
      </div>
    </main>
  );
}
export default People;
