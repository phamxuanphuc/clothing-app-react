import React from "react";
import './CartDropDown.style.scss';
//Component
import ButtonCustom from "../buttom_customer/ButtonCustomer.component";
import BagItems from "../bag_items/BagItems.component";
//Router
import {withRouter} from "react-router-dom";

//Redux
import {connect} from "react-redux";
//Selector
import {selectBag} from "../../redux/reducers/bag/cart.selector";
//Action
import {toggleBag} from "../../redux/reducers/bag/bag.action";


const CartDropDown = ({bagItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className="cart-items">
      {
        bagItems.length ?
        (bagItems.map(item => <BagItems key={item.id} {...item}/>))
          :
          (<span className='empty-message'>Your cart is empty</span>)
      }
    </div>
    <ButtonCustom onClick={()=>{
      history.push('/checkout');
      dispatch(toggleBag())
    }}>Check Out</ButtonCustom>
  </div>
);
const mapStateToProp = state => (
  {
    bagItems: selectBag(state)
  }
);
export default withRouter(connect(mapStateToProp)(CartDropDown));