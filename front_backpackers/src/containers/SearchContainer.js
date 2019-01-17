import { connect } from "react-redux";
import { makeGetSearchDataAction } from "../actions/actions";
import SearchPage from "../searchPage/SearchPage";

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  getSearchData: searchData => dispatch(makeGetSearchDataAction(searchData)),
  getSearchResults: searchResults =>
    dispatch(makeGetSearchResultsAction(searchResults))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
