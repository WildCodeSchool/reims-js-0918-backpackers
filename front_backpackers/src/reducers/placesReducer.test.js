import { VIEW_PLACES } from "../actions/actionTypes";
import { makeViewPlacesAction } from "../actions/actions";

describe("placesReducer", () => {
  it("should return a VIEW_PLACES action", () => {
    const expected = {
      type: VIEW_PLACES
    };

    expect(makeViewPlacesAction()).toEqual(expected);
  });
});
