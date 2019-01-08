import { FETCH_ID_ACTIVITY } from "../actions/actionTypes";

const uploadReducer = (previousState = 0, action) => {
  switch (action.type) {
    case FETCH_ID_ACTIVITY:
      return action.idCurrent;
    default:
      return previousState;
  }
};

export default uploadReducer;
