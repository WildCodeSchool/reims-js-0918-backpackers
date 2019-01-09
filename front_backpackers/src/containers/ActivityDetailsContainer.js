import { connect } from "react-redux";
import { makeGetCapacityAction } from "../actions/actions";
import ActivityDetails from "../SinglePages/ActivityDetails";

const mapStateToProps = state => ({
  participants: state.participants
});

const mapDispatchToProps = dispatch => ({
  getCapacity: participants => dispatch(makeGetCapacityAction(participants))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetails);
