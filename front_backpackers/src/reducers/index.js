import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loadingReducer from "./loadingReducer";
import placesReducer from "./placesReducer";
import activitiesReducer from "./activitiesReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import activityReducer from "./activityReducer";
import { reducer as formReducer } from "redux-form";
import mapReducer from "./mapReducer";
import displayHomePageReducer from "./displayHomePageReducer";
import placeReducer from "./placeReducer";
import chatsReducer from "./chatsReducer";
import uploadReducer from "./uploadReducer";
import viewReducer from "./viewReducer";
import { SELECT_PLACE_ADDRESS } from "../actions/actionTypes";
import selectAddressReducer from "./selectAddressReducer";

const backpackersApp = history =>
  combineReducers({
    router: connectRouter(history),
    displayHomePage: displayHomePageReducer,
    loading: loadingReducer,
    places: placesReducer,
    activities: activitiesReducer,
    form: formReducer.plugin({
      createPlace: (state, action) => {
        switch (action.type) {
          case SELECT_PLACE_ADDRESS:
            return {
              ...state,
              values: {
                ...state.values,
                ...action.address
              }
            };
          default:
            return state;
        }
      }
    }),
    profile: profileReducer,
    menu: menuReducer,
    map: mapReducer,
    activity: activityReducer,
    place: placeReducer,
    chats: chatsReducer,
    idCurrent: uploadReducer,
    viewForm: viewReducer,
    selectAddress: selectAddressReducer
  });

export default backpackersApp;
