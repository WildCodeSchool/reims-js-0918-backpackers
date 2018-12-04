import { VIEW_PLACES, VIEW_ACTIVITIES, FETCH_ACTIVITIES } from "./actionTypes";

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

export const makeViewActivitiesAction = activities => ({
  type: VIEW_ACTIVITIES,
  activities
});

export const makeFetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});
