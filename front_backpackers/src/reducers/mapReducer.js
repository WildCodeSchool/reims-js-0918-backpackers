import { GET_GEOLOCATION } from "../actions/actionTypes"

const mapReducer = (previousState = [], action) => {
  switch (action.type) {
    case GET_GEOLOCATION:
      return action.coords
    default:
      return previousState
  }
}

export default mapReducer