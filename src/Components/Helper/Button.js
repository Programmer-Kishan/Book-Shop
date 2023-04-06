import React from 'react'

import classes from './Button.module.css';

const Button = (props) => {

  const buttonClass = classes.btn + " " + props.className;

  return (
    <button 
      type={props.type} 
      className={buttonClass} 
      onClick={props.onClick ? props.onClick : ()=>{}}
    >
      {props.children}
    </button>
  )
}

export default Button