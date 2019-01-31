import profileReducer from "./profileReducer";
import {
  makeViewProfileAction,
  makeViewProfileActivityAction
} from "../actions/actions";

describe("profileReducer", () => {
  it("handles VIEW_PROFILE action", () => {
    const fakeState = [];
    const dataFecthed = {
      surname: "Surname",
      firstname: "Firstname"
    };
    const expected = {
      surname: "Surname",
      firstname: "Firstname"
    };
    expect(
      profileReducer(fakeState, makeViewProfileAction(dataFecthed))
    ).toEqual(expected);
  });
});

describe("profileReducer", () => {
  it("handles VIEW_PROFILE_ACTIVITY action", () => {
    const fakeState = [];
    const profile = { name: "Teoxane" };
    const dataFecthed = [
      {
        surname: "Surname",
        firstname: "Firstname"
      },
      {
        surname: "Surname",
        firstname: "Firstname"
      }
    ];
    const expected = [
      {
        name: "Teoxane",
        activities: [
          {
            surname: "Surname",
            firstname: "Firstname"
          },
          {
            surname: "Surname",
            firstname: "Firstname"
          }
        ]
      }
    ];
    expect(
      profileReducer(
        fakeState,
        makeViewProfileActivityAction(dataFecthed, profile)
      )
    ).toEqual(expected);
  });
});
