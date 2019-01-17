import { makeSelectPlaceAddressAction } from "../actions/actions";
import selectAddressReducer from "./selectAddressReducer";

describe("selectAddressReducer", () => {
  it("handles SELECT_PLACE_ADDRESS action", () => {
    const fakeState = {};
    const address = {
      road: "test",
      building: 6,
      city: "Tokyo",
      country: "Japan",
      lat: 1.1231,
      lng: 1.1231,
      postcode: 51100
    };
    const expected = {
      address: "6 test",
      city: "Tokyo",
      country: "Japan",
      lat: 1.1231,
      long: 1.1231,
      postcode: 51100
    };
    expect(
      selectAddressReducer(fakeState, makeSelectPlaceAddressAction(address))
    ).toEqual(expected);
  });
});
