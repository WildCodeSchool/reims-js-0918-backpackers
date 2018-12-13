import activityReducer from "./activityReducer"
import { makeViewActivityAction } from "../actions/actions";

describe("activityReducer", () => {
  it("Should return an activity", () => {
    const previousState = {}
    const activity = {
      name: "Soirée à la Tokyo Tower",
      price: 15,
      place: "Tokyo"
    }
    const expected = {
      name: "Soirée à la Tokyo Tower",
      price: 15,
      place: "Tokyo"
    }
    expect(activityReducer(previousState, makeViewActivityAction(activity))).toEqual(expected)
  })
})