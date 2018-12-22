import placeReducer from "./placeReducer"
import { makeViewPlaceAction } from "../actions/actions";

describe("placeReducer", () => {
  it("Should return a place", () => {
    const previousState = {}
    const place = {
      name: "Soirée à la Tokyo Tower",
      country: "Japan",
      place: "Tokyo"
    }
    const expected = {
      name: "Soirée à la Tokyo Tower",
      country: "Japan",
      place: "Tokyo"
    }
    expect(placeReducer(previousState, makeViewPlaceAction(place))).toEqual(expected)
  })
})