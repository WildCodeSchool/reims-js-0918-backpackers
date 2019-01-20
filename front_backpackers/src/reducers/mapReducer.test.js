import mapReducer from "./mapReducer";
import {
  makeGetGeolocationAction,
  makeGetMapFilterAction
} from "../actions/actions";

describe("mapReducer", () => {
  it("handles GET_GEOLOCATION", () => {
    const fakeState = { coords: [], filter: "Pas de filtre" };
    const coords = [50.34, 0.234];
    const expected = { filter: "Pas de filtre", coords: [50.34, 0.234] };
    expect(mapReducer(fakeState, makeGetGeolocationAction(coords))).toEqual(
      expected
    );
  });
});

describe("mapReducer", () => {
  it("handles GET_MAP_FILTER", () => {
    const fakeState = { coords: [], filter: "Pas de filtre" };
    const filter = "bien-etre";
    const expected = { filter: "bien-etre", coords: [] };
    expect(mapReducer(fakeState, makeGetMapFilterAction(filter))).toEqual(
      expected
    );
  });
});
