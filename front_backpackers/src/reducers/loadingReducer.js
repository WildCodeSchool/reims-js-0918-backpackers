import { VIEW_ACTIVITIES, FETCH_ACTIVITIES } from "../actions/actionTypes";

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case VIEW_ACTIVITIES:
      return false;
    case FETCH_ACTIVITIES:
      return true;
    default:
      return previousState;
  }
};

export default loadingReducer;
