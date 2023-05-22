import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../Helper/Backdrop';

import ProductList from './ProductList';

const ProductModel = (props) => {
  return (
    <>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ProductList />,
            document.getElementById('overlay-root')
        )}
    </>
  )
}

export default ProductModel