import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import activityReducer from "./activityReducer";
import { reducer as formReducer } from "redux-form";

const backpackersApp = history =>
  combineReducers({
    router: connectRouter(history),
    loading: loadingReducer,
    places: placesReducer,
    activities: activitiesReducer,
    form: formReducer,
    profile: profileReducer,
    menu: menuReducer,
    activity: activityReducer
  });

export default backpackersApp;
