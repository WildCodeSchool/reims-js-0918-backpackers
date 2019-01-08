import {
  VIEW_PLACES,
  FETCH_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES,
  VIEW_PROFILE,
  OPEN_MENU,
  CLOSE_MENU,
  CREATE_ACTIVITY,
  GET_GEOLOCATION,
  VIEW_ACTIVITY,
  DISPLAY_PLACES,
  DISPLAY_ACTIVITIES,
  VIEW_PLACE,
  GET_CHATS
} from "./actionTypes";

export const makeDisplayPlacesAction = () => ({
  type: DISPLAY_PLACES
});

export const makeDisplayActivitiesAction = () => ({
  type: DISPLAY_ACTIVITIES
});

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

export const makeFetchPlacesAction = () => ({
  type: FETCH_PLACES
});

export const makeViewProfileAction = profile => ({
  type: VIEW_PROFILE,
  profile
});

export const makeViewActivitiesAction = activities => ({
  type: VIEW_ACTIVITIES,
  activities
});

export const makeViewActivityAction = activity => ({
  type: VIEW_ACTIVITY,
  activity
});

export const makeViewPlaceAction = place => ({
  type: VIEW_PLACE,
  place
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

export const makeGetGeolocationAction = coords => ({
  type: GET_GEOLOCATION,
  coords
});

export const makeGetChatsAction = (chat, messages) => ({
  type: GET_CHATS,
  chat,
  messages
});
