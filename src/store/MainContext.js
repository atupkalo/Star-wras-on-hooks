import { createContext, useState } from "react";

import { English } from "./English";
import { Ukrainian } from "./Ukrainian";

const MainContext = createContext({
  theme: "",
  lenguage: {},
  switchTheme: (bool) => {},
  switchLanguage: (bool) => {},
});

export function MainContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [lenguageData, setLenguageData] = useState({ ...English });

  function doSwitchTheme(bool) {
    return bool ? setTheme("light") : setTheme("dark");
  }

  function doSwitchLanguage(bool) {
    return bool
      ? setLenguageData({ ...English })
      : setLenguageData({ ...Ukrainian });
  }

  const context = {
    theme: theme,
    language: lenguageData,
    switchTheme: doSwitchTheme,
    switchLanguage: doSwitchLanguage,
  };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
