import { connect } from "react-redux";
import Profile from "../Profile";
import {
  makeViewProfileAction
} from "../actions/actions";

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  viewProfile: profile => dispatch(makeViewProfileAction(profile)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
