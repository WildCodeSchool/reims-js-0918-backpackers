import React, { Component, Fragment } from "react"
import "./Chat.scss"

class SendMessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
    this.props.onChange()
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <Fragment>
        <form className="mb-2" onSubmit={this.onSubmit}>
          <input className="px-2 mr-2" value={this.state.text} onSubmit={() => console.log("lol")} onChange={this.onChange} type="text" placeholder="Tapez votre texte" />
          <button className="rounded-circle" type="submit"><i className="fas w-100 fa-arrow-up"></i>
          </button>
        </form>
      </Fragment>
    )
  }
}

export default SendMessageForm