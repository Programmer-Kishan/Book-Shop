import React, { useState, useEffect, useContext } from 'react';

import classes from './Book.module.css';

import Button from '../Helper/Button';
import BookContext from '../../store/book-context';

const Book = (props) => {

  const [isAdded, setIsAdded] = useState(false);

  const ctx = useContext(BookContext);

  const currentBook = ctx.bookList.find(book => book.bookId === props.id)

    const handleIncrement = () => {
      ctx.onIncrement(props.id);
      // setQuant(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
      if (currentBook.quantity === 1) {
        setIsAdded(false);
        ctx.onRemove(props.id);
      } else {
        ctx.onDecrement(props.id);
        // setQuant(prevValue => prevValue - 1);
      }
    }

  const handleClick = () => {

    const selectedBook = {
      bookId: props.id,
      title: props.title,
      price: props.price,
      link: props.link,
      quantity: 1,
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
            // <ProductConfig id = {props.id} onRemove = {setIsAdded}/>
            <>
              <div className={classes["config"]}>
                <button type='button' className={classes["btn__config-add"]} onClick={handleIncrement}>+</button>
                <p>{currentBook.quantity !== 0 ? currentBook.quantity : setIsAdded(false)}</p>
                {/* <p>{currentBook.quantity}</p> */}
                <button type='button' className={classes["btn__config-sub"]} onClick={handleDecrement}>-</button>
              </div>
            </>
          }
        </div>
      </div>    
    </div>
  )
}

export default Book