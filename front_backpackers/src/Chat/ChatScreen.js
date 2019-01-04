import React, { Component, Fragment } from "react"
import Chatkit from "@pusher/chatkit"
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      userWhoAreTyping: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.sendTypingEvent = this.sendTypingEvent.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: "/authenticate"
      })
    })
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: 19594094,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            },
            onUserStartedTyping: user => {
              this.setState({
                userWhoAreTyping: [...this.state.userWhoAreTyping, user.name]
              })
            },
            onUserStoppedTyping: user => {
              this.setState({
                userWhoAreTyping: this.state.userWhoAreTyping.filter(username => username !== user.name)
              })
            },
            onUserCameOnline: () => this.forceUpdate(),
            onUserWentOffline: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate()

          }
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
      .catch(error => console.error("error", error))
  }

  sendMessage(text) {
    this.state.currentUser.sendMessage({
      roomId: this.state.currentRoom.id,
      text
    })
  }

  sendTypingEvent() {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.error("error", error))
  }

  render() {
    return (
      <Fragment>
        <MessageList messages={this.state.messages} />
        <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
      </Fragment>
    )
  }
}

export default ChatScreen