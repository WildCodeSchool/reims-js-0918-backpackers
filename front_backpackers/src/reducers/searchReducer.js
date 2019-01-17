import { GET_SEARCH_DATA, GET_SEARCH_RESULTS } from "../actions/actionTypes";

const searchReducer = (
  prevState = { searchData: {}, searchResults: [] },
  action
) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return { ...prevState, searchData: action.searchData };
    case GET_SEARCH_RESULTS:
      return { ...prevState, searchResults: action.searchResults };
    default:
      return prevState;
  }
};

export default searchReducer;
