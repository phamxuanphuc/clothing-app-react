import React, { Component } from "react";
import "./PreviewCollection.styles.scss";
import CollectionItem from "../collection_item/CollectionItem.component";



class PreviewCollection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="collection-preview">
        <h2 className="title">{this.props.title}</h2>
        <div className="preview">
          {this.props.items
            .filter((item, index) => index < 4)
            .map(({id,...otherItemProps}) => (
              <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
      </div>
    );
  }
}
export default PreviewCollection;
