import React, { useState, useContext } from 'react'
import Key from './Key'
import { KeysContext } from '../App'

export default function KeyList() {
  const [nextKey, setNextKey] = useState(0)
  const keys = useContext(KeysContext)

  return (
    <>
      {keys.map(key => {
        return key.id == nextKey ? <Key key={key.id} id={key.id} value={key.key} start={true} /> : <Key key={key.id} id={key.id} value={key.key} start={false} />
      })}
    </>

  )
}
