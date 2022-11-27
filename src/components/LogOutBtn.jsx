import React from 'react';
import './CallToAction.css';

export default function LogOutBtn(props) {
    let { type , text , fx, className } = props
  return (
    <button type={type} onClick={fx} className={className} >{text}</button>
  )
}