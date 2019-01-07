import { VIEW_PLACES } from "../actions/actionTypes";

const placesReducer = (previousState = [], action) => {
  switch (action.type) {
    case VIEW_PLACES:
      return action.places;
    default:
      return previousState;
  }
};

export default placesReducer;
