import React, { useState, useRef, useReducer } from 'react'

import Card from "../Helper/Card";
import Button from "../Helper/Button";
import Input from "./Input.js";

import classes from './Login.module.css';

const nameReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: !(/\d/.test(action.val))}
  } else if (action.type === 'INPUT_FOCUS') {
    return {value: state.val, isValid: !(/\d/.test(state.value))}
  }
  return {value: '', isValid: false}
} 

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')}
  } else if (action.type === 'INPUT_FOCUS') {
    return {value: state.val, isValid: state.value.includes("@")}
  }
  return {value: '', isValid: false}
}


const Login = (props) => {

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();

  const [fnameState, dispatchFname] = useReducer(nameReducer, {
    value: '',
    isValid: null
  })

  const [lnameState, dispatchLname] = useReducer(nameReducer, {
    value: '',
    isValid: null
  })

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const fnameChangeHandler = (event) => {
    dispatchFname({type: 'USER_INPUT', val: event.target.value});
  }

  const fnameValidateHandler = () => {
    dispatchFname({type: 'INPUT_FOCUS'})
  } 

  const lnameChangeHandler = (event) => {
    dispatchLname({type: 'USER_INPUT', val: event.target.value});
  }

  const LnameValidateeHandler = () => {
    dispatchLname({type: 'INPUT_FOCUS'})
  } 

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  }

  const emailValidateHandler = () => {
    dispatchEmail({type: 'INPUT_FOCUS'})
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fnameState.isValid && lnameState.isValid && emailState.isValid) {
      props.greetNameHandler(fnameRef.current.value);
      props.onLogin(fnameRef.current.value, lnameRef.current.value, emailRef.current.value)
    } else {
      console.log("Error in inputs");
    }
  }

  return (
    <>
        <Card className={classes.login}>
            <h2 className={classes["form-title"]}>LOGIN</h2>
            <form 
              onSubmit={handleSubmit}
            >
                <Input 
                  inputTitle="First Name" 
                  type="text" 
                  inputRef={fnameRef}
                  state={fnameState}
                  onChange={fnameChangeHandler}
                  onBlur={fnameValidateHandler}
                />
                <Input 
                  inputTitle="Last Name" 
                  type="text" 
                  inputRef={lnameRef}
                  state={lnameState}
                  onChange={lnameChangeHandler}
                  onBlur={LnameValidateeHandler}
                />
                <Input 
                  inputTitle="Email" 
                  type="email" 
                  inputRef={emailRef}
                  state={emailState}
                  onChange={emailChangeHandler}
                  onBlur={emailValidateHandler}
                />
                <Button type="submit" className={classes["form-btn"]}>Submit</Button>
            </form>
        </Card>
    </>
  )
}

export default Login