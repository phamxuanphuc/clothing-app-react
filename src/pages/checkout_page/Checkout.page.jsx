import React from 'react';
import './Checkout.styles.scss';
//Component
import CheckoutItem from "../../components/checkout_item/Checkout.component";

//Redux Select
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectBag,selectTotal} from "../../redux/reducers/bag/cart.selector";



const CheckoutPage=({cartItems, total})=>(
  <div className='checkout-page'>
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div className="checkout-content">
      {
        cartItems.map(item=>(<CheckoutItem key={item.id} {...item} >{item.name}</CheckoutItem>))
      }
    </div>
    <div className="total">
      <span>Total:${total}</span>
    </div>
  </div>
);
const mapStateToProps= createStructuredSelector({
  cartItems: selectBag,
  total: selectTotal
});

export default connect(mapStateToProps)(CheckoutPage);