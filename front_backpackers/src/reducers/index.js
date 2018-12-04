import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";

const backpackersApp = combineReducers({
  loading: loadingReducer,
  places: placesReducer,
  activities: activitiesReducer
});

export default backpackersApp;
