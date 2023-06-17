import React, { useState, memo } from 'react'

export default memo(function Key(props) {
  const {
    id,
    value,
    start
  } = props

  const [className, setClassName] = useState("p-8 m-2 rounded bg-gray-400")


  addEventListener('keydown', e => {
    if (start) {
      if (e.key == value) {
        setClassName("p-8 m-2 rounded bg-green-400")
      } else {
        setClassName("p-8 m-2 rounded bg-red-400")
      }
    }
  })


  return (
    <span className={className}>{value}</span>
  )
})
