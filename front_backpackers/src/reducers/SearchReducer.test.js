import {
  makeGetSearchDataAction,
  makeDoNewSearchAction
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
      searchView: "searchResults",
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
      searchData: {
        typeChoice: "Culturel",
        placesLeft: 2,
        city: "Tokyo"
      }
    };
    expect(
      searchReducer(
        fakeState,
        makeGetSearchDataAction(searchData, searchResults)
      )
    ).toEqual(expected);
  });
});

describe("searchReducer", () => {
  it("handles GET_SEARCH_DATA action", () => {
    const fakeState = {
      searchData: {},
      searchResults: [],
      searchView: "searchResults"
    };
    const expected = {
      searchView: "searchForm",
      searchResults: [],
      searchData: {}
    };
    expect(searchReducer(fakeState, makeDoNewSearchAction())).toEqual(expected);
  });
});
