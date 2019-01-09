import { makeGetChatsAction } from "../actions/actions";
import chatsReducer from "./chatsReducer";

describe("chatsReducer", () => {
  it("should return a chat with 2 messages", () => {
    const previousState = [];
    const messages = [{ message: "hello" }, { message: "hello" }];
    const chat = 42
    const expected = [
      { name: chat, messages: messages }
    ];
    expect(
      chatsReducer(previousState, makeGetChatsAction(chat, messages))
    ).toEqual(expected);
  });
});
