import mapReducer from "./mapReducer"
import { makeGetGeolocationAction } from "../actions/actions";

describe("mapReducer", () => {
  it("handles GET_GEOLOCATION", () => {
    const fakeState = []
    const coords = [50.34, 0.234]
    const expected = [50.34, 0.234]
    expect(mapReducer(fakeState, makeGetGeolocationAction(coords))).toEqual(expected)
  })
})