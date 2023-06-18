import React, { createContext } from "react"
import '../css/app.css'
import KeyList from "./components/KeyList"

export const KeysContext = createContext()
const keys = [
  {
    id: 0,
    key: "j",
  },
  {
    id: 1,
    key: "i",
  },
  {
    id: 2,
    key: " ",
  },
  {
    id: 3,
    key: "g",
  },
  {
    id: 4,
    key: "o",
  },
  {
    id: 5,
    key: "b",
  }
]

function App() {

  return <KeysContext.Provider value={keys}>
    <KeyList />
  </KeysContext.Provider>
}

export default App
