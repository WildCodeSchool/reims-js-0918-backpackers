import { GET_SEARCH_DATA } from "../actions/actionTypes";

const searchReducer = (
  prevState = { searchData: {}, searchResults: [] },
  action
) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return {
        searchResults: action.searchResults,
        searchData: action.searchData
      };
    default:
      return prevState;
  }
};

export default searchReducer;
