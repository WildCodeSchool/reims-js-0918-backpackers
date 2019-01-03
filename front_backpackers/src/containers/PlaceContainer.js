import { connect } from "react-redux";
import { makeViewPlaceAction } from "../actions/actions";
import PlacePage from "../SinglePages/PlacePage";

const mapStateToProps = state => ({
  place: state.place
})

const mapDispatchToProps = dispatch => ({
  viewPlace: place => dispatch(makeViewPlaceAction(place)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage)