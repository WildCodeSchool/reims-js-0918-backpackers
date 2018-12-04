import { connect } from "react-redux";
import HomePage from "../HomePage/HomePage";
import {
  makeViewPlacesAction,
  makeFetchPlacesAction,
  makeViewActivitiesAction,
  makeFetchActivitiesAction
} from "../actions/actions";

const mapStateToProps = state => ({
  places: state.places,
  activities: state.activities,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  viewPlaces: places => dispatch(makeViewPlacesAction(places)),
  fetchPlaces: () => dispatch(makeFetchPlacesAction()),
  viewActivities: activities => dispatch(makeViewActivitiesAction(activities)),
  fetchActivities: () => dispatch(makeFetchActivitiesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
