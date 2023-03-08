import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import People from "./pages/People/People";
import Home from "./pages/Home/Home";
import Planets from "./pages/Planets/Planets";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Starships from "./pages/Starships/Starships";
import Login from "./pages/Login/Login";
import MainContext from "./store/MainContext";

import "./App.css";

function App() {
  const body = document.querySelector("body");
  const ctx = useContext(MainContext);

  const lang = ctx.language;
  if (ctx.theme === "light") {
    body.style.background = "#f9f9f9";
  } else {
    body.style.background = "#291E2F";
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          exect
          element={<Home mainTitle={lang.logedIn.home} />}
        ></Route>
        <Route
          path="People"
          exect
          element={<People mainTitle={lang.logedIn.people} />}
        ></Route>
        <Route
          path="Planets"
          element={<Planets mainTitle={lang.logedIn.planets} />}
        ></Route>
        <Route
          path="Starships"
          element={<Starships mainTitle={lang.logedIn.starships} />}
        ></Route>
        <Route
          path="Login"
          element={<Login mainTitle={lang.logedIn.login} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
