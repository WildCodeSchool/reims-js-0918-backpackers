import { connect } from "react-redux";
import {
  makeAFetchIdActivityAction,
  makeAViewFormAction
} from "../actions/actions";
import CreateActivityPage from "../FormPage/CreateActivityPage";

const mapStateToProps = state => ({
  idCurrent: state.idCurrent,
  viewForm: state.viewForm
});

const mapDispatchToProps = dispatch => ({
  idCurrent: idCurrent => dispatch(makeAFetchIdActivityAction(idCurrent)),
  viewForm: () => dispatch(makeAViewFormAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateActivityPage);
