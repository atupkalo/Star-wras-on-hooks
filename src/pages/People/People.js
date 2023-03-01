import { useState } from "react";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";

function People() {
  return (
    <main className="people">
      <h3 className="main-title">People</h3>
      <div className="container">
        <List section={"people"} />
        <Card classIcon={"person-icon"} />
      </div>
    </main>
  );
}
export default People;
