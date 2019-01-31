import { GET_CHATS } from "../actions/actionTypes";

const chatList = []
const addChat = (action) => {
  chatList.filter(chat => chat.name === action.chat).length < 1 ?
    chatList.push({ name: action.chat, messages: action.messages })
    : chatList.map(chat => chat.name === action.name ? chat.messages = action.messages : "")
  return chatList
}

const chatsReducer = (previousState = [], action) => {
  switch (action.type) {
    case GET_CHATS:
      return addChat(action);
    default:
      return previousState;
  }
};

export default chatsReducer;
