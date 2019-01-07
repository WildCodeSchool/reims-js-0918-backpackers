import React, { Component } from "react"

class TypingIndicator extends Component {
  render() {
    return (
      this.props.userWhoAreTyping.length === 1 ?
        <p>{this.props.userWhoAreTyping[0]} écrit</p>
        : this.props.userWhoAreTyping.length > 1 ?
          <p>{this.props.userWhoAreTyping[0]} et {this.props.userWhoAreTyping[1]} écrivent</p>
          : this.props.userWhoAreTyping.length > 2 ?
            <p>{this.props.userWhoAreTyping[0]}, {this.props.userWhoAreTyping[1]} et d'autres écrivent</p>
            : <div />
    )
  }
}

export default TypingIndicator