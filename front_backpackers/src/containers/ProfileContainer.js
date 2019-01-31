import { connect } from "react-redux";
import Profile from "../Profile";
import { makeViewProfileAction } from "../actions/actions";
import { makeViewProfileActivityAction } from "../actions/actions";

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  viewProfile: profile => dispatch(makeViewProfileAction(profile)),
  viewProfileActivity: (profile, profileActivities) =>
    dispatch(makeViewProfileActivityAction(profile, profileActivities))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
