import { VIEW_ACTIVITIES } from "../actions/actionTypes";
import { makeViewActivitiesAction } from "../actions/actions";

describe("makeViewActivitiesAction", () => {
  it("should return a VIEW_ACTIVITIES action", () => {
    const expected = {
      type: VIEW_ACTIVITIES
    };

    expect(makeViewActivitiesAction()).toEqual(expected);
  });
});
