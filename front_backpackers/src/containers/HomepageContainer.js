import { connect } from "react-redux";
import HomePage from "../HomePage/HomePage";
import {
  makeViewActivitiesAction,
  makeFetchActivitiesAction
} from "../actions/actions";

const mapStateToProps = state => ({
  activities: state.activities,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  viewActivities: activities => dispatch(makeViewActivitiesAction(activities)),
  fetchActivities: () => dispatch(makeFetchActivitiesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
