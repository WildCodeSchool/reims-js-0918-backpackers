import { connect } from "react-redux"
import { makeSelectPlaceAddressAction } from "../actions/actions";
import CreatePlacePage from "../FormPage/CreatePlacePage";

const mapStateToProps = state => ({
  selectAddress: state.selectAddress
})

const mapDispatchToProps = dispatch => ({
  getAddress: address => dispatch(makeSelectPlaceAddressAction(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlacePage)