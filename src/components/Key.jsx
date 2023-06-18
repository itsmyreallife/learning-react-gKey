import React, { useState, memo, useEffect } from 'react'

export default memo(function Key(props) {
  const {
    id,
    value,
    start,
    setNextKey
  } = props

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
  addEventListener('keydown', eFunc)
  
  useEffect(() => {
    if (!start) {
      removeEventListener('keydown', eFunc)
    }
  }, [className])

  return (
    <span className={className}>{value}</span>
  )
})
