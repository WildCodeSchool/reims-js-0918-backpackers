import { connect } from "react-redux"
import Maps from "../Maps";

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Maps)