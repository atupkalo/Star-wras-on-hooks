import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Preloader from "../Preloader/Preloader";

import "./List.css";

function List(props) {
  function clickHandler() {}

  function getData() {
    fetch(`https://swapi.dev/api/${"people"}`, this.requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({ people: result.results }))
      .then(() => this.setState({ preloader: false })) // switch to a diff method
      .catch((error) => this.setState({ error: true }));
  }

  return (
    <div className="list">
      <div className="error">
        Looks LIke some error has occurred, try again later
      </div>
      <ListItem clickHandle={clickHandler} itemName={""} id={""} />
    </div>
  );
}

export default List;
