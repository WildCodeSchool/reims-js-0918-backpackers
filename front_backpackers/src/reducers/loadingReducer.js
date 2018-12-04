import { VIEW_PLACES, FETCH_PLACES } from "../actions/actionTypes";

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case VIEW_PLACES:
      return false;
    case FETCH_PLACES:
      return true;
    default:
      return previousState;
  }
};

export default loadingReducer;
