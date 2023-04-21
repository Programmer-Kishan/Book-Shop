import React, { useState, useContext } from 'react';

import classes from './Book.module.css';

import Button from '../Helper/Button';
import BookContext from '../../store/book-context';

const ProductConfig = (props) => {
  return (
    <div className={classes["config-btn"]}>
      <button type='button' className={classes["book__config-btn"]}>+</button>
      <p>10</p>
      <button type='button' className={classes["book__config-btn"]}>-</button>
    </div>
  )
}

const Book = (props) => {

  const [isAdded, setIsAdded] = useState(false)

  const ctx = useContext(BookContext);

  const handleClick = () => {
    ctx.onClick(props.id);
    setIsAdded(true)
  }

  return (
    <div className={classes['book-card']}>
      <div className={classes['book-content']}>
        <div className={classes['book-front']}>
          <img src={props.link} alt="book image" />
        </div>
        <div className={classes['book-back']}>
          <h2>{props.title}</h2>
          <p>₹{props.price}</p>
          {!isAdded ? 
            <Button type='submit' className={classes['book-btn']} onClick={handleClick}>Add to cart</Button>
            :
            <ProductConfig />
          }
          {/* <ProductConfig /> */}
        </div>
      </div>    
    </div>
  )
}

export default Book