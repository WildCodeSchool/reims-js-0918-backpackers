import placesReducer from "./placesReducer";
import { makeViewPlacesAction } from "../actions/actions";

describe("placesReducer", () => {
  it("should return places with 2 objects", () => {
    const previousState = [];
    const places = [
      {
        name: "Pêche"
      },
      {
        name: "Visite du musée"
      }
    ];

    const expected = [
      {
        name: "Pêche"
      },
      {
        name: "Visite du musée"
      }
    ];

    expect(placesReducer(previousState, makeViewPlacesAction(places))).toEqual(
      expected
    );
  });
});
