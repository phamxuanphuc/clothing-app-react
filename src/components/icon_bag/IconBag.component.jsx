import React from 'react';
import './IconBag.style.scss';
//Redux
import {connect} from "react-redux";
import {toggleBag} from "../../redux/reducers/bag/bag.action";


import {ReactComponent as IconBag} from "../../assets/images/shopping-bag.svg";

const IconBagComponent=({toggleBag})=>(
  <div className='cart-icon' onClick={toggleBag}>
    <IconBag className='shopping-icon'/>
    <div className='item-count'>00</div>
  </div>
);
const mapDispatchToProps= dispatch=>(
  {
    toggleBag: ()=> dispatch(toggleBag())
  }
);

export default connect(null, mapDispatchToProps)(IconBagComponent);