import { connect } from "react-redux";
import {
  makeAFetchIdActivityAction,
  makeAViewFormAction,
  makeAViewUploadAction
} from "../actions/actions";
import CreateActivityPage from "../FormPage/CreateActivityPage";

const mapStateToProps = state => ({
  id: state.idCurrent,
  view: state.viewForm
});

const mapDispatchToProps = dispatch => ({
  idCurrent: idCurrent => dispatch(makeAFetchIdActivityAction(idCurrent)),
  viewForm: () => dispatch(makeAViewFormAction()),
  viewUpload: () => dispatch(makeAViewUploadAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateActivityPage);
