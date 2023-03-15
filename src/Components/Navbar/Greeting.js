import React from 'react'

import classes from "./Greeting.module.css";

const Greeting = (props) => {
  return (
    <>
        <p className={classes.greet}>Hello, {props.name}!</p>
    </>
  )
}

export default Greeting