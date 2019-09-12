import React from "react";
import "./app.css";
import HomePage from "./pages/home_page/HomePage.pages";
import ShopPage from "./pages/shop_page/Shop.page";
import SignInSignUpPage from "./pages/signIn_signUp_page/SignIn-SignUp.page";

//Components
import Header from "./components/header/Header.component";

//Routing
import { Switch, Route } from "react-router-dom";
//Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
     if(userAuth){
       const userRef= await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapshot => {
         this.setState({
           currentUser:{
             id: snapshot.id,
             ...snapshot.data()
           }
         })
       })
     }
     this.setState({currentUser: userAuth})
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
