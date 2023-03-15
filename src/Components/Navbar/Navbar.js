import React from 'react';

import Greeting from './Greeting';

import classes from './Navbar.module.css'

const Navbar = (props) => {

  const navbarClass = props.className + " " + classes.navbar;

  return (
    <>
        <nav className={navbarClass}>
            <h2>
                The Book Shop
            </h2>
            {props.isLogin ? <Greeting name="Kishan"/> : ''}
            
        </nav>
    </>
  )
}

export default Navbar