import profileReducer from "./profileReducer"
import { makeViewProfileAction } from '../actions/actions'

describe("profileReducer", () => {
  it("handles VIEW_PROFILE action", () => {
    const fakeState = []
    const dataFecthed = {
      surname: "Surname",
      firstname: "Firstname"
    }
    const expected = {
      surname: "Surname",
      firstname: "Firstname"
    }
    expect(profileReducer(fakeState, makeViewProfileAction(dataFecthed))).toEqual(expected)
  })
})