import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import Preloader from "../Preloader/Preloader";

import "./List.css";

const people = {
  name: "",
};

function List(props) {
  const [allPeople, setAllPeople] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [error, setError] = useState(false);

  function getData() {
    fetch(`https://swapi.dev/api/${props.section}/`)
      .then((response) => response.json())
      .then((result) => setAllPeople(result.results))
      .then(() => setPreloader(false))
      .catch((error) => {
        setError(true);
        setPreloader(false);
      });
  }

  function clickHandler(e) {
    const id = Number(e.target.id);
    const listItemData = allPeople.filter((elem, i) => {
      return i === id;
    });
    props.passingData(listItemData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list">
      {error && (
        <div className="error">
          Looks LIke some error has occurred, try again later
        </div>
      )}
      {allPeople.map((elem, i) => {
        return (
          <ListItem
            itemName={elem.name}
            id={i}
            key={i}
            clickHandle={clickHandler}
          />
        );
      })}
      {preloader && <Preloader />}
    </div>
  );
}

export default List;
