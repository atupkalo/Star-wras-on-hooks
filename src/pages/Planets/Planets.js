import { useState } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";

function Planets() {
  return (
    <main className="people">
      <h3 className="main-title">Planets</h3>
      <div className="container">
        <List section={"planets"} />
        <Card classIcon={"planet-icon"} />
      </div>
    </main>
  );
}
export default Planets;
