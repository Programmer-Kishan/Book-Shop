import React, { useState, useContext } from 'react';

import ProductModel from '../ProductModel/ProductModel';
import Button from "../Helper/Button";

import classes from './Cart.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import BookContext from '../../store/book-context';

const Cart = () => {

  const [product, setProduct] = useState(null);

  const ctx = useContext(BookContext);

  const handleClick = () => {
    setProduct(true);
  }

  const productHandler = () => {
    setProduct(null);
  }

  return (
    <>
      {product && <ProductModel onConfirm={productHandler}/>}
      <Button type='button' className={classes['cart-btn']} onClick={handleClick}>
          <span>Your Cart </span><FontAwesomeIcon icon={faCartShopping} />
          {ctx.totalBooks !== 0 ? <div className={classes['counter']}>{ctx.totalBooks}</div> : ""}
          {/* <div className={classes['counter']}>{ctx.totalBooks}</div> */}
      </Button>
    </>
  )
}

export default Cart