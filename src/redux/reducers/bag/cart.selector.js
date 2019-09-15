import {createSelector} from "reselect";

const selectorBag = state => state.bag;
export const itemsBagCount = createSelector(
  [selectorBag],
  item =>
    item.bagItems.reduce((count, item) => item.quantity + count, 0)
);
export const selectBagHidden = createSelector(
  [selectorBag],
  item => item.hidden
);
export const selectBag = createSelector(
  [selectorBag],
  bag => bag.bagItems
);
export const selectTotal=createSelector(
  [selectorBag],
  item =>
    item.bagItems.reduce((total, item) => item.quantity*item.price + total, 0)
);