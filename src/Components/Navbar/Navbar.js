import React, { useContext } from 'react';

import Greeting from './Greeting';
import Button from '../Helper/Button';
import Cart from './Cart';

import classes from './Navbar.module.css';

import AuthContext from '../../store/auth-context';

const Navbar = () => {

  const ctx = useContext(AuthContext);

  return (
    <>
        <nav className={classes.navbar}>
            <h2>
                The Book Shop
            </h2>
            <div className={classes["login-info"]}>
              {ctx.isLoggedIn ? <Greeting name={ctx.greetName} /> : ''}
              {ctx.isLoggedIn ? <Cart /> : ''}
              {ctx.isLoggedIn ? <Button type="button" className={classes["nav-btn"]} onClick={ctx.onLogout}>Logout</Button>: ''}
            </div>
        </nav>
    </>
  )
}

export default Navbar