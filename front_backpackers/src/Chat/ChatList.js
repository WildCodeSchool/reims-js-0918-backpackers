import React, { Component, Fragment } from "react";
import axios from "axios";
import Chatkit from "@pusher/chatkit";
import ChatScreen from "./ChatScreen";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import "./Chat.scss";

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "ChatList",
      currentUser: {},
      currentChat: {}
    };
    this.viewChat = this.viewChat.bind(this);
    this.viewChatList = this.viewChatList.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/profile", {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + localStorage.getItem("BackpackersToken")
        }
      })
      .then(response => this.props.viewProfile(response.data))
      .then(() =>
        axios
          .post("/users", {
            username: this.props.profile[0].username
          })
          .catch(error => {
            console.log(error);
          })
      )
      .then(() => {
        const chatManager = new Chatkit.ChatManager({
          instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
          userId: this.props.profile[0].username,
          tokenProvider: new Chatkit.TokenProvider({
            url: "/authenticate"
          })
        });
        chatManager.connect().then(currentUser => {
          this.setState({ currentUser });
        });
      });
  }

  viewChat(room) {
    this.setState({
      currentScreen: "ChatScreen",
      currentChat: {
        id: room.id,
        name: room.name
      }
    });
  }

  viewChatList() {
    this.setState({
      currentScreen: "ChatList"
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.currentScreen === "ChatList" ? (
          <Fragment>
            <Row className="blueHeader fixed-top px-4">
              <Col xs="3">
                <Link to="/">
                  <i className="fas fa-chevron-left text-white" />
                </Link>
              </Col>
              <Col xs="6">
                <p className="text-white text-center mb-0">Mes conversations</p>
              </Col>
              <Col xs="3" />
            </Row>
            <div className="chatList">
              {this.state.currentUser.rooms ? (
                this.state.currentUser.rooms.length === 0 ? (
                  <p>vous n'êtes inscrit à aucune activité</p>
                ) : (
                  this.state.currentUser.rooms.map((room, index) => (
                    <button
                      onClick={() => this.viewChat(room)}
                      key={index}
                      className="my-2"
                    >
                      {room.name}
                    </button>
                  ))
                )
              ) : (
                <p className="text-center my-3">
                  <i className="fas fa-spinner fa-spin" />
                </p>
              )}
              <div className="homeUnderline" />
            </div>
          </Fragment>
        ) : this.state.currentScreen === "ChatScreen" ? (
          <ChatScreen
            currentUsername={this.props.profile[0].username}
            getChat={this.props.addChat}
            chats={this.props.chats}
            currentChat={this.state.currentChat}
            changeView={this.viewChatList}
          />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

export default ChatList;
