import { VIEW_PROFILE } from "../actions/actionTypes";

const profileReducer = (previousState = {}, action) => {
  switch (action.type) {
    case VIEW_PROFILE:
      return action.profile;
    default:
      return previousState;
  }
};

export default profileReducer;
