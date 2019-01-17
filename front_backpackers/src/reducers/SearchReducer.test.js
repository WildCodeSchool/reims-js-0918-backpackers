import {
  makeGetSearchDataAction,
  makeGetSearchResultsAction
} from "../actions/actions";
import searchReducer from "./searchReducer";

describe("searchReducer", () => {
  it("handles GET_SEARCH_DATA action", () => {
    const fakeState = { searchData: {}, searchResults: [] };
    const searchData = {
      typeChoice: "Culturel",
      placesLeft: 2,
      city: "Tokyo"
    };
    const expected = {
      searchResults: [],
      searchData: {
        typeChoice: "Culturel",
        placesLeft: 2,
        city: "Tokyo"
      }
    };
    expect(
      searchReducer(fakeState, makeGetSearchDataAction(searchData))
    ).toEqual(expected);
  });
});

describe("searchReducer", () => {
  it("handles GET_SEARCH_RESULTS action", () => {
    const fakeState = { searchData: {}, searchResults: [] };
    const searchResults = [
      {
        name: "name",
        city: "Tokyo"
      },
      {
        name: "name2",
        city: "Reims"
      }
    ];
    const expected = {
      searchResults: [
        {
          name: "name",
          city: "Tokyo"
        },
        {
          name: "name2",
          city: "Reims"
        }
      ],
      searchData: {}
    };
    expect(
      searchReducer(fakeState, makeGetSearchResultsAction(searchResults))
    ).toEqual(expected);
  });
});
