import React, { Component } from "react"
import Chatkit from "@pusher/chatkit"
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import { Row, Col } from "reactstrap"
import "./Chat.scss"

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
          roomId: this.props.currentChat.id,
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
      <div className="d-flex flex-column">
        <Row className="blueHeader fixed-top px-4">
          <Col xs="3">
            <button onClick={() => this.props.changeView()}>
              <i className="fas fa-chevron-left text-white" />
            </button>
          </Col>
          <Col xs="6">
            <p className="text-white text-center mb-0">{this.props.currentChat.name}</p>
          </Col>
          <Col xs="3">
          </Col>
        </Row >
        <Row>
          <Col xs="12" className="d-flex flex-column chatPage">
            <MessageList messages={this.state.messages} currentUser={this.state.currentUser} />
            <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
          </Col>
        </Row>

      </div>
    )
  }
}

export default ChatScreen