import React, { useState, memo, useEffect } from 'react'

export default memo(function Key({
  id,
  value,
  start,
  setNextKey
}) {

  const [className, setClassName] = useState("p-8 m-2 rounded bg-gray-400")

  const eFunc = e => {
    if (start) {
      if (e.key == value) {
        console.log(e);
        setClassName("p-8 m-2 rounded bg-green-400")
      } else {
        setClassName("p-8 m-2 rounded bg-red-400")
      }
      setNextKey(id + 1)

    }
  }

  useEffect(() => {
    if (start) {
      addEventListener('keydown', eFunc);
    }
  
    return () => {
      removeEventListener('keydown', eFunc);
    };
  }, [start]);

  return (
    <span className={className}>{value}</span>
  )
})
