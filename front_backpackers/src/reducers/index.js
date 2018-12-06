import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";
import profileReducer from "./profileReducer";

const backpackersApp = combineReducers({
  loading: loadingReducer,
  places: placesReducer,
  profile: profileReducer,
  activities: activitiesReducer
});

export default backpackersApp;
