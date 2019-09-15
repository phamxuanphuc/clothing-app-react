import {createSelector} from "reselect";

const currentUser= state => state.users.currentUser;

export const selectCurrentUser=createSelector(
  [currentUser],
  user=> user
);