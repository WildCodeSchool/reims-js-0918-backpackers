import { VIEW_PLACES, FETCH_PLACES } from "./actionTypes";
import { makeViewPlacesAction, makeFetchPlacesAction } from "./actions";

describe("makeViewPlacesAction", () => {
  it("should return a VIEW_PLACES action", () => {
    const places = [
      {
        name: "tokyo",
        description: "superbe tour"
      },
      {
        name: "tokyo",
        description: "superbe tour"
      }
    ];

    const expected = {
      type: VIEW_PLACES,
      places
    };

    expect(makeViewPlacesAction(places)).toEqual(expected);
  });
});

describe("makeFetchPlacesAction", () => {
  it("should return a FETCH_PLACES action", () => {
    const expected = {
      type: FETCH_PLACES
    };

    expect(makeFetchPlacesAction()).toEqual(expected);
  });
});
