import React from "react";
import './ButtonCustomer.styles.scss';

const ButtonCustomer=({children, signInGoogle, ...otherProps})=>(
  <button className={`${signInGoogle && 'sign-in-google' } button-custom`} {...otherProps}>
    {children}
  </button>
);
export default ButtonCustomer
