import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import People from "./pages/People/People";
import Planets from "./pages/Planets/Planets";
import Shipes from "./pages/Ships/Ships";
import MainContext from "./store/MainContext";

import "./App.css";

function App() {
  const body = document.querySelector("body");
  const ctx = useContext(MainContext);

  const lang = ctx.language;
  if (ctx.theme === "light") {
    body.style.background =
      "linear-gradient(to right, #dde8ea, rgb(233, 223, 230))";
  } else {
    body.style.background =
      "linear-gradient(to right, #2a2644, rgb(59, 18, 47))";
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          exect
          element={<People mainTitle={lang.nav.people} />}
        ></Route>
        <Route
          path="Planets"
          element={<Planets mainTitle={lang.nav.planets} />}
        ></Route>
        <Route
          path="Ships"
          element={<Shipes mainTitle={lang.nav.starships} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
