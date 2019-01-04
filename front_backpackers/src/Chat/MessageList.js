import React, { Component } from "react"

class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((message, index) => (
          <li key={index}>
            <div>
              {console.log(message)}
              <span>{message.senderId}</span>
              <p>{message.text}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default MessageList