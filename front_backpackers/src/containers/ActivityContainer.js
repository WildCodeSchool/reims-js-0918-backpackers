import { connect } from "react-redux";
import {
  makeViewActivityAction,
  makeViewProfileAction
} from "../actions/actions";
import ActivityPage from "../SinglePages/ActivityPage";

const mapStateToProps = state => ({
  activity: state.activity,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  viewActivity: activity => dispatch(makeViewActivityAction(activity)),
  viewProfile: profile => dispatch(makeViewProfileAction(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityPage);
