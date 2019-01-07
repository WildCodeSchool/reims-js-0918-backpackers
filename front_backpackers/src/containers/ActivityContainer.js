import { connect } from "react-redux";
import { makeViewActivityAction } from "../actions/actions";
import ActivityPage from "../SinglePages/ActivityPage";

const mapStateToProps = state => ({
  activity: state.activity
})

const mapDispatchToProps = dispatch => ({
  viewActivity: activity => dispatch(makeViewActivityAction(activity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPage)