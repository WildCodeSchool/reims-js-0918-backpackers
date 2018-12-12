import { connect } from "react-redux";
import HomePage from "../HomePage/HomePage";
import {
  makeViewPlacesAction,
  makeFetchPlacesAction,
  makeViewActivitiesAction,
  makeFetchActivitiesAction,
  makeOpenMenuAction,
  makeCloseMenuAction,
  makeViewActivityAction
} from "../actions/actions";

const mapStateToProps = state => ({
  places: state.places,
  activities: state.activities,
  loading: state.loading,
  menu: state.menu,
  activity: state.activity
});

const mapDispatchToProps = dispatch => ({
  viewPlaces: places => dispatch(makeViewPlacesAction(places)),
  fetchPlaces: () => dispatch(makeFetchPlacesAction()),
  viewActivities: activities => dispatch(makeViewActivitiesAction(activities)),
  viewActivity: activity => dispatch(makeViewActivityAction(activity)),
  fetchActivities: () => dispatch(makeFetchActivitiesAction()),
  openMenu: menu => dispatch(makeOpenMenuAction(menu)),
  closeMenu: menu => dispatch(makeCloseMenuAction(menu))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
