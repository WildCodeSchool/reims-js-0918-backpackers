import { ADD1, REMOVE1 } from "../actions/actionTypes";

const searchParticipantsReducer = (state = 1, action) => {
  switch (action.type) {
    case ADD1:
      return state + 1;
    case REMOVE1:
      return state - 1;
    default:
      return state;
  }
};

export default searchParticipantsReducer;
