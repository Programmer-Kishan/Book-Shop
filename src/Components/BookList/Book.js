import React from 'react';

import classes from './Book.module.css';

import Button from '../Helper/Button';

import Harry1 from '../../images/Harry1.jpg';

const Book = () => {
  return (
    <div className={classes['book-card']}>
      <div className={classes['book-content']}>
        <div className={classes['book-front']}>
          <img src={Harry1} alt="book image" />
        </div>
        <div className={classes['book-back']}>
          <h2>Harry Potter</h2>
          <p>₹500</p>
          <Button type='submit' className={classes['book-btn']}>Add to cart</Button>
        </div>
      </div>    
    </div>
  )
}

export default Book