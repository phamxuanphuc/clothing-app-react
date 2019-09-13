import React from "react";
import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
//Component
import IconBag from "../icon_bag/IconBag.component";
import CartDropDown from "../cart_dropdown/CartDropDown.component";


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="logo-wrap">
      <Link className="logo" to={"/"}>
        <Logo />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to={"/shop"}>
        SHOP
      </Link>
      <Link className="option" to={"/contact"}>
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={()=>auth.signOut()}> SIGN OUT </div>
      ) : (
        <Link className="option" to={"/sign-in"}>
          SIGN IN
        </Link>
      )}
      <IconBag/>
      {!hidden && (<CartDropDown/>)}
    </div>
  </div>
);
const mapStateToProps=({users, bag})=>(
  {
    currentUser: users.currentUser,
    hidden: bag.hidden

  }
);
export default connect(mapStateToProps)(Header);
