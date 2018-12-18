import { UPLOAD_SUCCESS, UPLOAD_FAIL } from "../actions/actionTypes";

const uploadReducer = (previousState = "", action) => {
  switch (action.type) {
    case UPLOAD_SUCCESS:
      return action.data;
    case UPLOAD_FAIL:
      return action.error;
    default:
      return previousState;
  }
};

export default uploadReducer;
