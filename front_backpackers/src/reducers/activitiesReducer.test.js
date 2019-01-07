import activitiesReducer from "./activitiesReducer";
import { makeViewActivitiesAction } from "../actions/actions";

describe("activitiesReducer", () => {
  it("should return activities with 2 objects", () => {
    const previousState = [];
    const activities = [
      {
        name: "Tokyo Tower"
      },
      {
        name: "Tokyo Burger"
      }
    ];
    const expected = [
      {
        name: "Tokyo Tower"
      },
      {
        name: "Tokyo Burger"
      }
    ];
    expect(
      activitiesReducer(previousState, makeViewActivitiesAction(activities))
    ).toEqual(expected);
  });
});
