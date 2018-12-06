import { OPEN_MENU, CLOSE_MENU } from "../actions/actionTypes";

const openMenuReducer = (previousState = false, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return true;
    case CLOSE_MENU:
      return false;
    default:
      return previousState;
  }
};

export default openMenuReducer;
