import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <>
        <p className={classes["input-title"]}>Enter {props.inputTitle}: </p>
        <input className={classes["input-field"]} type={props.type} placeholder={props.inputTitle} />
    </>
  )
}

export default Input