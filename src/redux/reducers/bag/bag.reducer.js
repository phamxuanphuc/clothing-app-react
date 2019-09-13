import * as Types from './bag.types';
const initialState={
  hidden :true
};
const bagReducer=(state=initialState, action)=>{
  switch (action.type) {
    case Types.TOGGLE_BAG:
      return{
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
export default bagReducer