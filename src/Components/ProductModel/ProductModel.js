import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../Helper/Backdrop';

const ProductModel = (props) => {
  return (
    <>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )}
    </>
  )
}

export default ProductModel