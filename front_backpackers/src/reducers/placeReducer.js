import { VIEW_PLACE } from "../actions/actionTypes"

const placeReducer = (previousState = {}, action) => {
  switch (action.type) {
    case VIEW_PLACE:
      return action.place
    default:
      return previousState
  }
}


export default placeReducer