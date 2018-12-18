import { connect } from "react-redux";
import HomePage from "../HomePage/HomePage";
import {
  makeViewPlacesAction,
  makeFetchPlacesAction,
  makeViewActivitiesAction,
  makeFetchActivitiesAction,
  makeOpenMenuAction,
  makeCloseMenuAction,
  makeGetGeolocationAction,
  makeViewProfileAction
} from "../actions/actions";

const mapStateToProps = state => ({
  places: state.places,
  activities: state.activities,
  loading: state.loading,
  menu: state.menu,
  map: state.map,
  activity: state.activity,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  viewPlaces: places => dispatch(makeViewPlacesAction(places)),
  fetchPlaces: () => dispatch(makeFetchPlacesAction()),
  viewActivities: activities => dispatch(makeViewActivitiesAction(activities)),
  fetchActivities: () => dispatch(makeFetchActivitiesAction()),
  openMenu: menu => dispatch(makeOpenMenuAction(menu)),
  closeMenu: menu => dispatch(makeCloseMenuAction(menu)),
  getCoords: coords => dispatch(makeGetGeolocationAction(coords)),
  viewProfile: profile => dispatch(makeViewProfileAction(profile)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
