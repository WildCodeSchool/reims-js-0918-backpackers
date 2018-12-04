import { connect } from "react-redux";
import HomePage from "../HomePage/HomePage";
import {
  makeViewPlacesAction,
  makeFetchPlacesAction
} from "../actions/actions";

const mapStateToProps = state => ({
  places: state.places,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  viewPlaces: places => dispatch(makeViewPlacesAction(places)),
  fetchPlaces: () => dispatch(makeFetchPlacesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
