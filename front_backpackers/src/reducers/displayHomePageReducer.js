import { DISPLAY_ACTIVITIES, DISPLAY_PLACES } from "../actions/actionTypes"

const displayHomePageReducer = (previousState = "places", action) => {
  switch (action.type) {
    case DISPLAY_ACTIVITIES:
      return "activities"
    case DISPLAY_PLACES:
      return "places"
    default:
      return previousState
  }
}

export default displayHomePageReducer