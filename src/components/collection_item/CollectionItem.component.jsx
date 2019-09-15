import React from "react";
import './CollectionItem.styles.scss'
//Components
import ButtonCustom from "../buttom_customer/ButtonCustomer.component";
//Redux
import {connect} from "react-redux";
import {addItemsBag} from "../../redux/reducers/bag/bag.action";


const CollectionItem = ({name, price, imageUrl, addItemsBag, id}) => (
  <div className="collection-item">
    <div className="image" style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}$</div>
    </div>
    <div className="btn-atc">
      <ButtonCustom addToCart onClick={() => addItemsBag({id, name, price, imageUrl})}>ADD TO CART</ButtonCustom>
    </div>
  </div>
);
const mapDispatchToProps = dispatch => (
  {
    addItemsBag: (item) => dispatch(addItemsBag(item))
  }
);

export default connect(null, mapDispatchToProps)(CollectionItem);
