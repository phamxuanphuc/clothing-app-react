import React from "react";
import './ButtonCustomer.styles.scss';

const ButtonCustomer=({children, signInGoogle, addToCart, ...otherProps})=>(
  <button className={`${addToCart && 'add-to-cart' } ${signInGoogle && 'sign-in-google' } button-custom`} {...otherProps}>
    {children}
  </button>
);
export default ButtonCustomer
