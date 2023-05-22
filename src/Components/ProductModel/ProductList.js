import React, { useContext } from 'react';

import Card from '../Helper/Card';
import BookContext from '../../store/book-context';

import classes from './ProductList.module.css';

const Product = props => {
    return (
        <div className={classes.product}>
            <img src={props.link} alt='book-img' />
            <div className={classes["product-info"]}>
                <h2>{props.title}</h2>
                <p>₹{props.price}</p>
                <p>Quantity: {props.quantity}</p>
            </div>
            <h3>₹{props.price * props.quantity}</h3>
        </div>
    )
}

const ProductList = () => {

    const ctx = useContext(BookContext);

  return (
    <Card className={classes["product-list"]}>
        <h1>Your List</h1>
        {ctx.bookList.map(ele => {
            return <Product 
                title = {ele.title}
                price = {ele.price}                
                quantity = {ele.quantity}
                link = {ele.link}
            />
        })}
    </Card>
  )
}

export default ProductList