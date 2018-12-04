import loadingReducer from "./loadingReducer";
import {
  makeFetchActivitiesAction,
  makeViewActivitiesAction
} from "../actions/actions";

describe("loadginReducer", () => {
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
