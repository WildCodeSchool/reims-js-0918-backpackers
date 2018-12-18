import displayHomePageReducer from "./displayHomePageReducer"
import { makeDisplayActivitiesAction, makeDisplayPlacesAction } from "../actions/actions";

describe('displayHomePageReducer', () => {
  it("shoudl change state from places to activities", () => {
    const previousState = "places"
    const expected = "activities"
    expect(displayHomePageReducer(previousState, makeDisplayActivitiesAction())).toEqual(expected)
  })
})

describe('displayHomePageReducer', () => {
  it("shoudl change state from activities to places", () => {
    const previousState = "activities"
    const expected = "places"
    expect(displayHomePageReducer(previousState, makeDisplayPlacesAction())).toEqual(expected)
  })
})