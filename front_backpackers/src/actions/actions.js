import { VIEW_PLACES, FETCH_PLACES } from "./actionTypes";

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

export const makeFetchPlacesAction = () => ({
  type: FETCH_PLACES
});
