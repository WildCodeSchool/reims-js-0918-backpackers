import { VIEW_ACTIVITY } from "../actions/actionTypes";

const activityReducer = (previousState = {}, action) => {
  switch (action.type) {
    case VIEW_ACTIVITY:
      return action.activity;
    default:
      return previousState;
  }
};

export default activityReducer;
