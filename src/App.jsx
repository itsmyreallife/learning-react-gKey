import React, { createContext } from "react";
import "./css/app.css";
import KeyList from "./components/KeyList";

export const KeysContext = createContext();
const keys = () => {
  const k = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let ks = [];

  for (let i = 0; i < k.length; i++) {
    ks.push({
      id: i,
      key: k[i],
    });
  }

  return ks;
};

function App() {
  return (
    <KeysContext.Provider value={keys}>
      <KeyList />
    </KeysContext.Provider>
  );
}

export default App;
