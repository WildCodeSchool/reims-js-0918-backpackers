import { GET_GEOLOCATION, GET_MAP_FILTER } from "../actions/actionTypes";

const mapReducer = (
  previousState = { coords: [], filter: "Pas de filtre" },
  action
) => {
  switch (action.type) {
    case GET_GEOLOCATION:
      return { ...previousState, coords: action.coords };
    case GET_MAP_FILTER:
      return { ...previousState, filter: action.filter };
    default:
      return previousState;
  }
};

export default mapReducer;
