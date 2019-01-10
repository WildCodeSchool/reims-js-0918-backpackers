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
  VIEW_PROFILE_ACTIVITY,
  GET_CHATS,
  FETCH_ID_ACTIVITY,
  VIEW_FORM,
  VIEW_UPLOAD,
  ADD1,
  REMOVE1
} from "./actionTypes";

export const makeAddAction = () => ({
  type: ADD1
});

export const makeRemoveAction = () => ({
  type: REMOVE1
});

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

export const makeViewProfileActivityAction = (profileActivities, profile) => ({
  type: VIEW_PROFILE_ACTIVITY,
  profile,
  profileActivities
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

export const makeAFetchIdActivityAction = idCurrent => ({
  type: FETCH_ID_ACTIVITY,
  idCurrent
});

export const makeAViewFormAction = () => ({
  type: VIEW_FORM
});

export const makeAViewUploadAction = () => ({
  type: VIEW_UPLOAD
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
