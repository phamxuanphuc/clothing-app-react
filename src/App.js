import React from "react";
import "./app.css";
import HomePage from "./pages/home_page/HomePage.pages";
import ShopPage from "./pages/shop_page/Shop.page";
import SignInSignUpPage from "./pages/signIn_signUp_page/SignIn-SignUp.page";
import CheckoutPage from "./pages/checkout_page/Checkout.page";

//Components
import Header from "./components/header/Header.component";

//Routing
import {Switch, Route, Redirect} from "react-router-dom";
//Firebase
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
//redux
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/reducers/user/user.actions";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }
      else{
        this.props.setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/checkout" component={CheckoutPage}/>
          <Route path="/sign-in" render={()=> this.props.currentUser? (<Redirect to='/'/>):(<SignInSignUpPage/>)}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state=>(
  {
    currentUser: state.users.currentUser
  }
);

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
