import React from 'react'

export default function ButtonSubmit(props) {
    let { type , text , fx} = props
  return (
    <button type={type} onClick={fx}>{text}</button>
  )
}
