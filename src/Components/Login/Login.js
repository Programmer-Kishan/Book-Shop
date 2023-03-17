import React from 'react'

import Card from "../Helper/Card";
import Button from "../Helper/Button";
import Input from "./Input.js";

import classes from './Login.module.css';


const Login = () => {
  return (
    <>
        <Card className={classes.login}>
            <h2 className={classes["form-title"]}>LOGIN</h2>
            <form>
                <Input inputTitle="First Name" type="text"/>
                <Input inputTitle="Last Name" type="text"/>
                <Input inputTitle="Email" type="email"/>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    </>
  )
}

export default Login