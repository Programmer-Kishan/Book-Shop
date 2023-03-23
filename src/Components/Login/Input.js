import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <>
        <p className={classes["input-title"]}>Enter {props.inputTitle}: </p>
        <input 
          className={`${classes["input-field"]} ${props.state.isValid === false ? classes.invalid: ''}`} 
          type={props.type} 
          placeholder={props.inputTitle}
          ref={props.inputRef}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
    </>
  )
}

export default Input