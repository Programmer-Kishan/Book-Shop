import React, { useContext } from 'react';

import Button from "../Helper/Button";

import classes from './Cart.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import BookContext from '../../store/book-context';

const Cart = () => {

    const ctx = useContext(BookContext);

  return (
    <>
        <Button type='button' className={classes['cart-btn']}>
            <span>Your Cart </span><FontAwesomeIcon icon={faCartShopping} />
            {ctx.totalBooks !== 0 ? <div className={classes['counter']}>{ctx.totalBooks}</div> : ""}
            {/* <div className={classes['counter']}>{ctx.totalBooks}</div> */}
        </Button>
    </>
  )
}

export default Cart