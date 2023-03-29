import React from 'react';

import Greeting from './Greeting';
import Button from '../Helper/Button';

import classes from './Navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {

  return (
    <>
        <nav className={classes.navbar}>
            <h2>
                The Book Shop
            </h2>
            <div className={classes["login-info"]}>
              {props.isLogin ? <Greeting name={props.greetName} /> : ''}
              {props.isLogin ? <Button type='button'>
                                <span>Your Cart </span><FontAwesomeIcon icon={faCartShopping} />
                              </Button>
                                : 
              ''}
              {props.isLogin ? <Button type="button" className={classes["nav-btn"]}>Logout</Button>: ''}
            </div>
        </nav>
    </>
  )
}

export default Navbar