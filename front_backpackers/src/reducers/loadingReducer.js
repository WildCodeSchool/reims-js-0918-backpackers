import {
  VIEW_PLACES,
  FETCH_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES
} from "../actions/actionTypes";

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case VIEW_PLACES:
      return false;
    case FETCH_PLACES:
      return true;
    case VIEW_ACTIVITIES:
      return false;
    case FETCH_ACTIVITIES:
      return true;
    default:
      return previousState;
  }
};

export default loadingReducer;
