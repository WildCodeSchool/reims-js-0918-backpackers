import { SELECT_PLACE_ADDRESS } from "../actions/actionTypes"

const selectAddressReducer = (previousState = {}, action) => {
  switch (action.type) {
    case SELECT_PLACE_ADDRESS:
      return {
        country: action.address.country,
        city: action.address.town ? action.address.town : action.address.city ? action.address.city : action.address.village,
        postcode: action.address.postcode,
        address: `${action.address.building ? `${action.address.building} ` : action.address.house_number ? `${action.address.house_number} ` : ""}${action.address.road}`
      }
    default:
      return previousState
  }
}

export default selectAddressReducer