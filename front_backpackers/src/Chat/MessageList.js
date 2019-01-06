import React, { Component } from "react"
import { Col } from "reactstrap"

class MessageList extends Component {
  componentDidUpdate() {
    const chatScroll = document.getElementById('test');
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }
  render() {
    return (
      <div id="test" className="messageList">
        <ul>
          {!this.props.messages ?
            <i className="fas fa-spinner fa-spin" />
            :
            this.props.messages.map((message, index) => (
              this.props.currentUser.id === message.senderId ?
                <Col className="my-2" key={index} xs="10">
                  <li className="my-2 d-flex">
                    <div className="text-black myMessage d-inline-block px-3 py-2">
                      <p className="d-inline">{message.text}</p>
                    </div>
                  </li>
                </Col>
                :
                <Col className="my-2" key={index} xs={{ size: 10, offset: 2 }}>
                  <p className="text-right mb-0">{message.senderId}</p>
                  <li className="d-flex justify-content-end">
                    <div className="text-white messageReceived d-inline-block px-3 py-2">
                      <p className="d-inline">{message.text}</p>
                    </div>
                  </li>
                </Col>
            ))
          }

        </ul>
      </div>
    )
  }
}

export default MessageList