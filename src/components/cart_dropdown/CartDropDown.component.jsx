import React from "react";
import './CartDropDown.style.scss';
//Component
import ButtonCustom from "../buttom_customer/ButtonCustomer.component";


const CartDropDown=()=>(
  <div className='cart-dropdown'>
    <div className="cart-items"/>
    <ButtonCustom>Check Out</ButtonCustom>
  </div>
);
export default CartDropDown;