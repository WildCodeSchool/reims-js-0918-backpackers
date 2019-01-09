import { GET_CAPACITY } from "../actions/actionTypes";

const capacityReducer = (previousState = 0, action) => {
  switch (action.type) {
    case GET_CAPACITY:
      return action.participants;
    default:
      return previousState;
  }
};

export default capacityReducer;
