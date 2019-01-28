import { GET_SEARCH_DATA, DO_NEW_SEARCH } from "../actions/actionTypes";

const searchReducer = (
  prevState = { searchData: {}, searchResults: [], searchView: "searchForm" },
  action
) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return {
        searchResults: action.searchResults,
        searchData: action.searchData,
        searchView: "searchResults"
      };
    case DO_NEW_SEARCH:
      return { ...prevState, searchView: "searchForm" };
    default:
      return prevState;
  }
};

export default searchReducer;
