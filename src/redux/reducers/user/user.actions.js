import * as userTypes from './user.constans'
export const setCurrentUser= user=>(
  {
    type: userTypes.SET_CURRENT_USER,
    payload: user
  }
);
