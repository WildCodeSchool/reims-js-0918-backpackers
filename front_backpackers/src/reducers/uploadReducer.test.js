import uploadReducer from "./uploadReducer";
import { makeAFetchIdActivityAction } from "../actions/actions";

describe("uploadReducer", () => {
  it("handles FETCH_ID_ACTIVITY action", () => {
    const fakeState = 0;
    const dataFecthed = 42;
    const expected = 42;
    expect(
      uploadReducer(fakeState, makeAFetchIdActivityAction(dataFecthed))
    ).toEqual(expected);
  });
});
