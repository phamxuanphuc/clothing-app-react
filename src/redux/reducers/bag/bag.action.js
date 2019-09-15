import * as Types from './bag.types';

export const toggleBag=()=>(
  {
    type: Types.TOGGLE_BAG
  }
);
export const addItemsBag=(item)=>(
  {
    type: Types.ADD_ITEMS_BAG,
    payload: item
  }
);