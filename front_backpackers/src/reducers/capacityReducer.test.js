import capacityReducer from "./capacityReducer";
import { makeGetCapacityAction } from "../actions/actions";

describe("capacityReducer", () => {
  it("Should return a number of participants", () => {
    const previousState = 0;
    const participants = 42;
    const expected = 42;
    expect(
      capacityReducer(previousState, makeGetCapacityAction(participants))
    ).toEqual(expected);
  });
});
