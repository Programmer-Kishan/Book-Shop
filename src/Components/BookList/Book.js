import React, { useState, useContext } from 'react';

import classes from './Book.module.css';

import Button from '../Helper/Button';
import ProductConfig from './ProductConfig';
import BookContext from '../../store/book-context';

const Book = (props) => {

  const [isAdded, setIsAdded] = useState(false);

  const ctx = useContext(BookContext);

  const handleClick = () => {

    const selectedBook = {
      bookId: props.id,
      title: props.title,
      price: props.price,
      quantity: 1
    }

    ctx.addBook(selectedBook);
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
            <ProductConfig id = {props.id} onRemove = {setIsAdded}/>
          }
          {/* <ProductConfig /> */}
        </div>
      </div>    
    </div>
  )
}

export default Book