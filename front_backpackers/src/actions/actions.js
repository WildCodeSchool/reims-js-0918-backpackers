import {
  VIEW_PLACES,
  FETCH_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES,
  VIEW_PROFILE
} from "./actionTypes";

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

export const makeFetchPlacesAction = () => ({
  type: FETCH_PLACES
});


export const makeViewProfileAction = (profile) => ({
  type: VIEW_PROFILE,
  profile
});

export const makeViewActivitiesAction = activities => ({
  type: VIEW_ACTIVITIES,
  activities
});

export const makeFetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});
