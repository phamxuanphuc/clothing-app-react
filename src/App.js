import React from "react";
import "./app.css";
import HomePage from "./pages/home_page/HomePage.pages";
import ShopPage from './pages/shop_page/Shop.page';

//Components
import Header from "./components/header/Header.component";

//Routing
import {Switch,Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>

    </div>
  );
}
export default App;
