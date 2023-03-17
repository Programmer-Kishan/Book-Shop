import React from 'react'

import Card from "../Helper/Card";
import Input from "./Input.js";

import classes from './Login.module.css';


const Login = () => {
  return (
    <>
        <Card className={classes.login}>
            <Input inputTitle="First Name" type="text"/>
            <Input inputTitle="Last Name" type="text"/>
            <Input inputTitle="Email" type="email"/>
        </Card>
    </>
  )
}

export default Login