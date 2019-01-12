import React, { Component } from "react"
import Chatkit from "@pusher/chatkit"
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import { Row, Col } from "reactstrap"
import "./Chat.scss"
import TypingIndicator from "./UserWhoAreTyping";
import UsersList from "./UsersList";

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      userWhoAreTyping: [],
      collapsed: false
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.sendTypingEvent = this.sendTypingEvent.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:b0eaa80f-5c88-4b49-b457-a758cc15ded0",
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
      //  .then(() => this.props.getChat(this.props.currentChat.id, this.state.messages))
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

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
            <button onClick={() => this.toggleNavbar()}>
              <i className="fas fa-users"></i>
            </button>
          </Col>
        </Row >
        <Row>
          <Col xs="12" className="d-flex flex-column chatPage">
            <UsersList
              users={this.state.currentRoom.users}
              show={this.state.collapsed}
              backdropClickHandler={this.toggleNavbar} />
            <MessageList messages={this.state.messages} currentUser={this.state.currentUser} />
            <TypingIndicator userWhoAreTyping={this.state.userWhoAreTyping} />
            <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
          </Col>
        </Row>

      </div>
    )
  }
}

export default ChatScreen