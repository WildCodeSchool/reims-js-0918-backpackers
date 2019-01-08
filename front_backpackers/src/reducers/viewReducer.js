import { VIEW_FORM } from "../actions/actionTypes";

const uploadReducer = (previousState = false, action) => {
  switch (action.type) {
    case VIEW_FORM:
      return true;
    default:
      return previousState;
  }
};

export default uploadReducer;
