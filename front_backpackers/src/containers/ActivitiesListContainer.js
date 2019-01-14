import { connect } from "react-redux";
import ActivitiesList from "../SinglePages/ActivitiesList";
import {
  makeViewActivitiesAction,
  makeFetchActivitiesAction
} from "../actions/actions";

const mapStateToProps = state => ({
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({
  viewActivities: activities => dispatch(makeViewActivitiesAction(activities)),
  fetchActivities: () => dispatch(makeFetchActivitiesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
