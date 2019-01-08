import { VIEW_FORM, VIEW_UPLOAD } from "../actions/actionTypes";

const uploadReducer = (previousState = false, action) => {
  switch (action.type) {
    case VIEW_FORM:
      return false;
    case VIEW_UPLOAD:
      return true;
    default:
      return previousState;
  }
};

export default uploadReducer;
