import React, { Component, Fragment } from "react"
import axios from "axios";
import Chatkit from "@pusher/chatkit"
import ChatScreen from "./ChatScreen"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

class ChatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScreen: "ChatList",
      currentUser: {}
    }
  }

  componentDidMount() {
    axios
      .get("/profile")
      .then(response => this.props.viewProfile(response.data))
      .then(() => (
        axios
          .post("/users", {
            mail: this.props.profile[0].mail,
            lastName: this.props.profile[0].lastName,
            firstName: this.props.profile[0].firstName
          })
          // .then(response => {
          //   this.setState({
          //     currentScreen: "ChatScreen"
          //   })
          // })
          .catch(error => { console.log(error) })
      ))
      .then(() => {
        const chatManager = new Chatkit.ChatManager({
          instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
          userId: this.props.profile[0].mail,
          tokenProvider: new Chatkit.TokenProvider({
            url: "/authenticate"
          })
        })
        chatManager
          .connect()
          .then(currentUser => {
            this.setState({ currentUser })
          })
      })
  }

  render() {
    return (
      <Fragment>
        <Row className="blueHeader mb-2 fixed-top px-4">
          <Col xs="3">
            <Link to="/">
              <i className="fas fa-chevron-left text-white" />
            </Link>
          </Col>
          <Col xs="6">
            <p className="text-white text-center mb-0">Mes conversations</p>
          </Col>
          <Col xs="3">
            <p className="header-btn text-right text-primary pt-2 mb-0 d-flex justify-content-between">
              <i className="fas fas fa-share-square text-white px-2" />
              <i className="far fa-heart text-white" />
            </p>
          </Col>
        </Row >
        {
          this.state.currentScreen === "ChatList" ?
            <div>
              {console.log("rrom", this.state.currentUser.rooms)}
              {this.state.currentUser.rooms ?
                this.state.currentUser.rooms.length === 0 ?
                  <p>vous n'êtes inscrit à aucune activité</p>
                  :
                  this.state.currentUser.rooms.map((room, index) => (
                    <button key={index}>
                      {room.name}
                    </button>
                  )) : ""}


            </div>
            : this.state.currentScreen === "ChatScreen" ?
              <ChatScreen currentUsername={this.props.profile[0].mail} />
              : ""
        }
      </Fragment >
    )
  }
}

export default ChatList