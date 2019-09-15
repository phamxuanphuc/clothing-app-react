import * as Types from './bag.types';
import {addItem} from "../bag/bag.utils";

const initialState={
  hidden :true,
  bagItems:[]
};
const bagReducer=(state=initialState, action)=>{
  switch (action.type) {
    case Types.TOGGLE_BAG:
      return{
        ...state,
        hidden: !state.hidden
      };
    case Types.ADD_ITEMS_BAG:
      return{
        ...state,
       bagItems: addItem(action.payload, state.bagItems)
      };
    default:
      return state;
  }
};
export default bagReducer