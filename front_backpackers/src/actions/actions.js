import {
  VIEW_PLACES,
  FETCH_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES,
  OPEN_MENU,
  CLOSE_MENU,
  CREATE_ACTIVITY
} from "./actionTypes";

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

export const makeFetchPlacesAction = () => ({
  type: FETCH_PLACES
});

export const makeViewActivitiesAction = activities => ({
  type: VIEW_ACTIVITIES,
  activities
});

export const makeFetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const makeOpenMenuAction = () => ({
  type: OPEN_MENU
});

export const makeCloseMenuAction = () => ({
  type: CLOSE_MENU
});

export const makeCreateActivityAction = () => ({
  type: CREATE_ACTIVITY
});
