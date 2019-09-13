import {combineReducers} from "redux";
//import reducer
import users from "./user/user.reducer";
import bag from "./bag/bag.reducer"

export default combineReducers({
  users,
  bag
});
