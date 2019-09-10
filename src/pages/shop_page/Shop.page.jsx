import React from "react";
import "./ShopPage.styles.scss";
import SHOP_DATA from "./ShopPage.data";
import PreviewCollection from "../../components/preview_collection/PreviewCollection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div className="shop-page">
        <div className="content">
          {this.state.collections.map(( { id, ...otherProps }) => (
            <PreviewCollection key={id} {...otherProps}/>
          ))}
        </div>
      </div>
    );
  }
}
export default ShopPage;
