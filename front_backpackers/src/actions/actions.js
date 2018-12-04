<<<<<<< HEAD
import { VIEW_PLACES, FETCH_PLACES } from "./actionTypes";
=======
import { VIEW_PLACES, VIEW_ACTIVITIES, FETCH_ACTIVITIES } from "./actionTypes";
>>>>>>> reduxactivities

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

<<<<<<< HEAD
export const makeFetchPlacesAction = () => ({
  type: FETCH_PLACES
=======
export const makeViewActivitiesAction = activities => ({
  type: VIEW_ACTIVITIES,
  activities
});

export const makeFetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
>>>>>>> reduxactivities
});
