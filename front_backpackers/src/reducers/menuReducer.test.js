import menuReducer from "./menuReducer";
import { makeOpenMenuAction, makeCloseMenuAction } from "../actions/actions";

describe("menuReducer", () => {
  it("handles OPEN_MENU action", () => {
    const fakeState = false;

    expect(menuReducer(fakeState, makeOpenMenuAction())).toEqual(true);
  });
  it("handles CLOSE_MENU action", () => {
    const fakeState = true;

    expect(menuReducer(fakeState, makeCloseMenuAction())).toEqual(false);
  });
});
