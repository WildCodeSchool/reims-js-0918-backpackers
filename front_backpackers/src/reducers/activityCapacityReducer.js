import { GET_ACTIVITY_CAPACITY } from "../actions/actionTypes";

const activityCapacityReducer = (previousState = {}, action) => {
  switch (action.type) {
    case GET_ACTIVITY_CAPACITY:
      return action.participants;
    default:
      return previousState;
  }
};

export default activityCapacityReducer;
