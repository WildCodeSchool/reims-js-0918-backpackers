import { connect } from "react-redux"
import { makeGetGeolocationAction } from "../actions/actions";
import CreatePlacePage from "../FormPage/CreatePlacePage";

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  getCoords: coords => dispatch(makeGetGeolocationAction(coords))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlacePage)