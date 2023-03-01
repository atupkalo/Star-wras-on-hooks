import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import People from "./pages/People/People";
import Planets from "./pages/Planets/Planets";
import Shipes from "./pages/Ships/Ships";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exect element={<People />}></Route>
        <Route path="Planets" element={<Planets />}></Route>
        <Route path="Ships" element={<Shipes />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
