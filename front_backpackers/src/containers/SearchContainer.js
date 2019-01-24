import { connect } from "react-redux";
import {
  makeGetSearchDataAction,
  makeDoNewSearchAction
} from "../actions/actions";
import SearchPage from "../searchPage/SearchPage";

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  getSearchData: (searchData, searchResults) =>
    dispatch(makeGetSearchDataAction(searchData, searchResults)),
  doNewSearch: () => dispatch(makeDoNewSearchAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
