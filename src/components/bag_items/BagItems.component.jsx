import React from 'react';
import './BagItems.styles.scss';

const  BagItems=({imageUrl, price,name, quantity})=>(
  <div className='bag-item'>
    <img src={imageUrl} alt="item"/>
    <div className="item-detail">
      <div className="name">{name}</div>
      <div className="price">{quantity} x ${price}</div>
    </div>
  </div>
);
export default BagItems