import React from 'react';

import Book from './Book';
import data from './BookData';

import classes from './BookList.module.css';

const BookList = () => {

    console.log(data);

  return (
    <div className={classes.books}>
        {data.map(ele => {
            return <Book 
                key = {ele.id}
                id = {ele.id}
                link = {ele.link}
                title = {ele.title}
                price = {ele.price}
            />
        })}
    </div>
  )
}

export default BookList