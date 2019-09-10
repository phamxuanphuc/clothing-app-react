import React from "react";
import "./MenuItem.styes.scss";

const MenuItem = ({ title, imgUrL, size }) => (
  <div className={`menu-item ${size}`}>
    <div className="wrap" style={{
        backgroundImage: `url(${imgUrL})`
      }}
    > </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">REGISTER NOW</span>
      </div>

  </div>
);
export default MenuItem;
