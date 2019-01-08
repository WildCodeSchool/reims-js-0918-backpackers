import { connect } from "react-redux";
import { makeAFetchIdActivityAction } from "../actions/actions";
// import UploadFiles from "../FormPage/UploadFiles";
import CreateActivityPage from "../FormPage/CreateActivityPage";

const mapStateToProps = state => ({
  idCurrent: state.idCurrent
});

const mapDispatchToProps = dispatch => ({
  idCurrent: idCurrent => dispatch(makeAFetchIdActivityAction(idCurrent))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateActivityPage);
