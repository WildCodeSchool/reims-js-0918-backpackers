import loadingReducer from "./loadingReducer";
import {
  makeFetchPlacesAction,
  makeViewPlacesAction,
  makeFetchActivitiesAction,
  makeViewActivitiesAction
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
  it("handles FETCH_ACTIVITIES action", () => {
    const fakeState = false;
    expect(loadingReducer(fakeState, makeFetchActivitiesAction())).toEqual(
      true
    );
  });
  it("handles VIEW_ACTIVITIES action", () => {
    const fakeState = true;
    expect(loadingReducer(fakeState, makeViewActivitiesAction([]))).toEqual(
      false
    );
  });
});
