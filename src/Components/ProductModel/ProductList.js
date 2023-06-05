import React, { useContext } from 'react';

import Card from '../Helper/Card';
import Button from '../Helper/Button';
import BookContext from '../../store/book-context';

import classes from './ProductList.module.css';

function getTotalAmount(list) {
    let sum = 0;
    list.map(ele => sum += ele.price * ele.quantity);
    return sum;
}

const Product = props => {

    const ctx = useContext(BookContext);

    return (
        <div className={classes.product}>
            <img src={props.link} alt='book-img' />
            <div className={classes["product-info"]}>
                <h2>{props.title}</h2>
                <p>₹{props.price}</p>
                <p>Quantity: {props.quantity}</p>
                <button 
                    type='button' 
                    className={classes['add-btn']}
                    onClick={() => ctx.onIncrement(props.id)}
                >
                    +
                </button>
                <button 
                    type='button' 
                    className={classes['sub-btn']}
                    onClick={() => props.quantity === 1 ? ctx.onRemove(props.id) : ctx.onDecrement(props.id)}
                >
                    -
                </button>
            </div>
            <h3>₹{props.price * props.quantity}</h3>
        </div>
    )
}

const ProductList = (props) => {

    const ctx = useContext(BookContext);

  return (
    <Card className={classes["product-list"]}>
        <h1>Your List</h1>
        {ctx.bookList.map(ele => {
            if (ele.quantity !== 0) {
                return <Product 
                    key = {ele.bookId}
                    id = {ele.bookId}
                    title = {ele.title}
                    price = {ele.price}                
                    quantity = {ele.quantity}
                    link = {ele.link}
                />
            }
        })}
        {
            ctx.totalBooks !== 0 ?
            <>
                <p>Total: ₹{getTotalAmount(ctx.bookList)}</p>
                <Button 
                    type="button" 
                    onClick={() => props.onConfirm()} 
                    className={classes['product-button']}
                >
                    Place Order
                </Button>
            </> 
            :
            <p>Cart is empty</p>
        }
    </Card>
  )
}

export default ProductList