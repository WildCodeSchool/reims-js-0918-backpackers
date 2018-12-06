import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";
import { reducer as formReducer } from "redux-form";

const backpackersApp = combineReducers({
  loading: loadingReducer,
  places: placesReducer,
  activities: activitiesReducer,
  form: formReducer
});

export default backpackersApp;
