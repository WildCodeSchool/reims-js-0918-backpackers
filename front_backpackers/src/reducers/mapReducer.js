import { GET_GEOLOCATION } from "../actions/actionTypes";

const mapReducer = (
  previousState = { coords: [], filter: "Pas de filtre" },
  action
) => {
  switch (action.type) {
    case GET_GEOLOCATION:
      return { ...previousState, coords: action.coords };
    default:
      return previousState;
  }
};

export default mapReducer;
