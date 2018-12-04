import loadingReducer from "./loadingReducer";
import {
  makeFetchPlacesAction,
  makeViewPlacesAction
} from "../actions/actions";

describe("loadingReducer", () => {
  it("handles FETCH_PLACES action", () => {
    const fakeState = false;

    expect(loadingReducer(fakeState, makeFetchPlacesAction())).toEqual(true);
  });
  it("handles VIEW_PLACES action", () => {
    const fakeState = true;

    expect(loadingReducer(fakeState, makeViewPlacesAction([]))).toEqual(false);
  });
});
