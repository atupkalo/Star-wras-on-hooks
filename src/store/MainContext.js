import { createContext, useState } from "react";

import { English } from "./English";
import { Ukrainian } from "./Ukrainian";

const MainContext = createContext({
  theme: "",
  lenguage: {},
  auth: ["admin", "12345"],
  authFlag: false,
  massage: "",
  reqClass: "",
  switchTheme: (bool) => {},
  switchLanguage: (bool) => {},
  switchLogs: (arr) => {},
  logOut: (bool) => {},
});

export function MainContextProvider(props) {
  const [theme, setTheme] = useState("dark");
  const [lenguageData, setLenguageData] = useState({ ...English });
  const [logFlag, setLogFlag] = useState(false);
  const [logResult, setLogResult] = useState("");
  const [reqClassDisplay, setReqClassDisplay] = useState("class-block");

  function doSwitchTheme(bool) {
    return bool ? setTheme("light") : setTheme("dark");
  }

  function doSwitchLanguage(bool) {
    return bool
      ? setLenguageData({ ...English })
      : setLenguageData({ ...Ukrainian });
  }
  function switchLogs(receivedArr) {
    for (let i = 0; i < receivedArr.length; i++) {
      if (receivedArr[i] === context.auth[i]) {
        setLogResult("Welcome admin, enjoy serfring our hub");
        setReqClassDisplay("class-none");
        return setLogFlag(true);
      } else {
        setLogResult("Login or password is incorrect");
        setReqClassDisplay("class-block");
        return setLogFlag(false);
      }
    }
  }

  function doLogOut(bool) {
    if (bool) {
      setLogResult("");
      setReqClassDisplay("class-block");
      return setLogFlag(false);
    }
  }

  const context = {
    theme: theme,
    language: lenguageData,
    auth: ["admin", "12345"],
    authFlag: logFlag,
    massage: logResult,
    reqClass: reqClassDisplay,
    switchTheme: doSwitchTheme,
    switchLanguage: doSwitchLanguage,
    switchLogs: switchLogs,
    logOut: doLogOut,
  };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
