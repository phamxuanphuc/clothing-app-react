import React from "react";
import './Checkout.styles.scss';

const CheckoutItem=({name, quantity, price, imageUrl})=>(
  <div className='checkout-item'>
    <div className="image-container">
      <img src={imageUrl} alt='item'/>
    </div>
    <div className="name">{name}</div>
    <div className="quantity">{quantity}</div>
    <div className="price">{price*quantity}</div>
    <div className="remove-btn">&#10005;</div>
  </div>
);
export default CheckoutItem;