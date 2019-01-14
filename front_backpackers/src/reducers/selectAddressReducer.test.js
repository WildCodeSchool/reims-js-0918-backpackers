import { makeSelectPlaceAddressAction } from '../actions/actions'
import selectAddressReducer from "./selectAddressReducer";

describe("selectAddressReducer", () => {
  it("handles SELECT_PLACE_ADDRESS action", () => {
    const fakeState = {}
    const address = {
      country: "Japan",
      city: "Tokyo"
    }
    const expected = {
      country: "Japan",
      city: "Tokyo"
    }
    expect(selectAddressReducer(fakeState, makeSelectPlaceAddressAction(address))).toEqual(expected)
  })
})