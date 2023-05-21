import React, { useState, useContext } from 'react'

import classes from './ProductConfig.module.css';

import BookContext from '../../store/book-context';


const ProductConfig = (props) => {

    const [quant, setQuant] = useState(1);

    const ctx = useContext(BookContext);

    const handleIncrement = () => {
      ctx.onIncrement(props.id);
      setQuant(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
      if (quant === 1) {
        props.onRemove(false);
        ctx.onRemove(props.id);
      } else {
        ctx.onDecrement(props.id);
        setQuant(prevValue => prevValue - 1);
      }
    }

  return (
    <div className={classes["config"]}>
        <button type='button' className={classes["btn__config-add"]} onClick={handleIncrement}>+</button>
        <p>{quant}</p>
        <button type='button' className={classes["btn__config-sub"]} onClick={handleDecrement}>-</button>
    </div>
  )
}

export default ProductConfig