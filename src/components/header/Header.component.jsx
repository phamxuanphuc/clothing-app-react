import React from "react";
import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo-wrap">
      <Link className="option" to={"/"}>
        <Logo/>
      </Link>
    </div>
    <div className="options">
      <Link className="option" to={"/shop"}>
        SHOP
      </Link>
      <Link className="option" to={"/contact"}>
        CONTACT
      </Link>
      <Link className="option" to={"/sign-in"}>
        SIGN IN
      </Link>
    </div>
  </div>
);
export default Header;
