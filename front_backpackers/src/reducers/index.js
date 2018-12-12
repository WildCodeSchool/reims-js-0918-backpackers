import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import { reducer as formReducer } from "redux-form";
import mapReducer from "./mapReducer";

const backpackersApp = history =>
  combineReducers({
    loading: loadingReducer,
    places: placesReducer,
    activities: activitiesReducer,
    form: formReducer,
    profile: profileReducer,
    menu: menuReducer,
    map: mapReducer,
    router: connectRouter(history)
  });

export default backpackersApp;
