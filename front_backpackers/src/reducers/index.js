import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import { reducer as formReducer } from "redux-form";

const backpackersApp = combineReducers({
  loading: loadingReducer,
  places: placesReducer,
  profile: profileReducer,
  activities: activitiesReducer,
  form: formReducer,
  menu: menuReducer
});

export default backpackersApp;
