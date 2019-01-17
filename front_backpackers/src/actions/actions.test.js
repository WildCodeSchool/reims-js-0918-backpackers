import {
  VIEW_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES,
  FETCH_PLACES,
  OPEN_MENU,
  CLOSE_MENU,
  CREATE_ACTIVITY,
  GET_GEOLOCATION,
  VIEW_ACTIVITY,
  VIEW_PROFILE,
  DISPLAY_PLACES,
  DISPLAY_ACTIVITIES,
  GET_CHATS,
  SELECT_PLACE_ADDRESS,
  VIEW_PROFILE_ACTIVITY,
  GET_SEARCH_DATA,
  GET_SEARCH_RESULTS
} from "./actionTypes";
import {
  makeViewPlacesAction,
  makeFetchPlacesAction,
  makeViewActivitiesAction,
  makeFetchActivitiesAction,
  makeViewProfileAction,
  makeCloseMenuAction,
  makeOpenMenuAction,
  makeCreateActivityAction,
  makeGetGeolocationAction,
  makeViewActivityAction,
  makeDisplayPlacesAction,
  makeDisplayActivitiesAction,
  makeGetChatsAction,
  makeSelectPlaceAddressAction,
  makeViewProfileActivityAction,
  makeGetSearchDataAction,
  makeGetSearchResultsAction
} from "./actions";

describe("makeViewProfileActivityAction", () => {
  it("should return a VIEW_PROFILE_ACTIVITY action", () => {
    const profile = { username: "Teoxane" };
    const profileActivities = [
      {
        name: "piscine",
        description: "go piscine"
      },
      {
        name: "foot",
        description: "go foot"
      }
    ];

    const expected = {
      type: VIEW_PROFILE_ACTIVITY,
      profile,
      profileActivities
    };

    expect(makeViewProfileActivityAction(profileActivities, profile)).toEqual(
      expected
    );
  });
});

describe("makeDisplayActivitiesAction", () => {
  it("should return a DISPLAY_PLACES action", () => {
    const expected = {
      type: DISPLAY_PLACES
    };

    expect(makeDisplayPlacesAction()).toEqual(expected);
  });
});

describe("makeDisplayActivitiesAction", () => {
  it("should return a DISPLAY_ACTIVITIES action", () => {
    const expected = {
      type: DISPLAY_ACTIVITIES
    };

    expect(makeDisplayActivitiesAction()).toEqual(expected);
  });
});

describe("makeViewPlacesAction", () => {
  it("should return a VIEW_PLACES action", () => {
    const places = [
      {
        name: "tokyo",
        description: "superbe tour"
      },
      {
        name: "tokyo",
        description: "superbe tour"
      }
    ];

    const expected = {
      type: VIEW_PLACES,
      places
    };

    expect(makeViewPlacesAction(places)).toEqual(expected);
  });
});

describe("makeFetchPlacesAction", () => {
  it("should return a FETCH_PLACES action", () => {
    const expected = {
      type: FETCH_PLACES
    };

    expect(makeFetchPlacesAction()).toEqual(expected);
  });
});

describe("makeViewActivitiesAction", () => {
  it("should return a VIEW_ACTIVITIES action", () => {
    const activities = [
      {
        name: "Soirée au bar",
        description: "on se retrouve tous au bar !"
      },
      {
        name: "Soirée au bar",
        description: "on se retrouve tous au bar !"
      }
    ];
    const expected = {
      type: VIEW_ACTIVITIES,
      activities
    };

    expect(makeViewActivitiesAction(activities)).toEqual(expected);
  });
});

describe("makeViewActivityAction", () => {
  it("should return a VIEW_ACTIVITY action", () => {
    const activity = {
      name: "Soirée au bar",
      description: "on se retrouve tous au bar !"
    };

    const expected = {
      type: VIEW_ACTIVITY,
      activity
    };

    expect(makeViewActivityAction(activity)).toEqual(expected);
  });
});

describe("makeFetchActivitiesAction", () => {
  it("should return a FETCH_ACTIVITIES", () => {
    const expected = {
      type: FETCH_ACTIVITIES
    };

    expect(makeFetchActivitiesAction()).toEqual(expected);
  });
});

describe("makeCreateActivityAction", () => {
  it("should return a CREATE_ACTIVITY action", () => {
    const expected = {
      type: CREATE_ACTIVITY
    };
    expect(makeCreateActivityAction()).toEqual(expected);
  });
});

describe("makeOpenMenuAction", () => {
  it("should return a OPEN_MENU", () => {
    const expected = {
      type: OPEN_MENU
    };

    expect(makeOpenMenuAction()).toEqual(expected);
  });
});

describe("makeCloseMenuAction", () => {
  it("should return a CLOSE_MENU", () => {
    const expected = {
      type: CLOSE_MENU
    };

    expect(makeCloseMenuAction()).toEqual(expected);
  });

  describe("makeViewProfileAction", () => {
    it("should return a VIEW_PROFILE action", () => {
      const profile = {
        lastname: "nom",
        firstname: "prenom"
      };

      const expected = {
        type: VIEW_PROFILE,
        profile
      };

      expect(makeViewProfileAction(profile)).toEqual(expected);
    });
  });
});

describe("makeGetGeoLocationAction", () => {
  it("should return a GET_GEOLOCATION", () => {
    const coords = [51.123, 0.431];
    const expected = {
      type: GET_GEOLOCATION,
      coords
    };

    expect(makeGetGeolocationAction(coords)).toEqual(expected);
  });
});

describe("makeGetChatsAction", () => {
  it("should return a GET_CHATS", () => {
    const messages = [{ message: 1 }, { message: 2 }];
    const chat = 42;
    const expected = {
      type: GET_CHATS,
      messages,
      chat
    };

    expect(makeGetChatsAction(chat, messages)).toEqual(expected);
  });
});

describe("makeSelectPlaceAddressAction", () => {
  it("should return a SELECT_PLACE_ADDRESS", () => {
    const address = {
      country: "japan",
      city: "tokyo",
      adress: "test",
      lat: 12,
      long: 12,
      postcode: 51100
    };
    const expected = {
      type: SELECT_PLACE_ADDRESS,
      address
    };

    expect(makeSelectPlaceAddressAction(address)).toEqual(expected);
  });
});

describe("makeGetSearchDataAction", () => {
  it("should return a GET_SEARCH_DATA", () => {
    const searchData = { country: "japan", city: "tokyo" };
    const expected = {
      type: GET_SEARCH_DATA,
      searchData
    };

    expect(makeGetSearchDataAction(searchData)).toEqual(expected);
  });
});

describe("makeGetSearchResultsAction", () => {
  it("should return a GET_SEARCH_RESULTS", () => {
    const searchResults = [
      { name: "Party", country: "japan", city: "tokyo" },
      { name: "Party2", country: "France", city: "Reims" }
    ];
    const expected = {
      type: GET_SEARCH_RESULTS,
      searchResults
    };

    expect(makeGetSearchResultsAction(searchResults)).toEqual(expected);
  });
});
