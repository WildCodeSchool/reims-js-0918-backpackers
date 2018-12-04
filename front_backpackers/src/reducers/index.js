import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";

const backpackersApp = combineReducers({
  loading: loadingReducer,
  places: placesReducer
});

export default backpackersApp;
