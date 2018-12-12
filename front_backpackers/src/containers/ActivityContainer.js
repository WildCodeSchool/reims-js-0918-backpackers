import { connect } from "react-redux";
import SinglePage from "../SinglePage/SinglePage"

const mapStateToProps = state => ({
  activity: state.activity
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage)