import { VIEW_ACTIVITIES } from "../actions/actionTypes";

const activitiesReducer = (previousState = [], action) => {
  switch (action.type) {
    case VIEW_ACTIVITIES:
      return action.activities;
    default:
      return previousState;
  }
};

export default activitiesReducer;
