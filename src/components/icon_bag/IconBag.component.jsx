import React from 'react';
import './IconBag.style.scss';
//Redux
import {connect} from "react-redux";
import {toggleBag} from "../../redux/reducers/bag/bag.action";
     //Select state
import {itemsBagCount} from "../../redux/reducers/bag/cart.selector";


import {ReactComponent as IconBag} from "../../assets/images/shopping-bag.svg";

const IconBagComponent = ({toggleBag, counts}) => (
  <div className='cart-icon' onClick={toggleBag}>
    <IconBag className='shopping-icon'/>
    <div className='item-count'>{counts}</div>
  </div>
);

const mapStateToProps = state => ({
  counts: itemsBagCount(state)
});

const mapDispatchToProps = dispatch => (
  {
    toggleBag: () => dispatch(toggleBag())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(IconBagComponent);