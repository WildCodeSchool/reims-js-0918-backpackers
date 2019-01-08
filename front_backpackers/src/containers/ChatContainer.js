import { connect } from "react-redux";
import ChatList from "../Chat/ChatList"
import { makeViewProfileAction, makeGetChatsAction } from "../actions/actions";

const mapStateToProps = state => ({
  profile: state.profile,
  chats: state.chats
})

const mapDispatchToProps = dispatch => ({
  viewProfile: profile => dispatch(makeViewProfileAction(profile)),
  addChat: (chat, messages) => dispatch(makeGetChatsAction(chat, messages))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)