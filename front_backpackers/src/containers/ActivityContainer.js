import { connect } from "react-redux";
import SinglePage from "../SinglePage/SinglePage"
import { makeViewActivityAction } from "../actions/actions";

const mapStateToProps = state => ({
  activity: state.activity
})

const mapDispatchToProps = dispatch => ({
  viewActivity: activity => dispatch(makeViewActivityAction(activity)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage)