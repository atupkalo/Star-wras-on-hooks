import { useContext } from "react";

import MainContext from "../../store/MainContext";

import Greetings from "../../components/Greetings/Greeting";

function Home() {
  const ctx = useContext(MainContext);
  const lang = ctx.language.home;

  return (
    <main className="home">
      <div className={`greet-title greet-title-${ctx.theme}`}>
        {lang.hometitle}
      </div>
      <Greetings />
    </main>
  );
}
export default Home;
