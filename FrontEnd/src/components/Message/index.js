import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Config} from '@common';
import {getChats, afterPostMessage} from '../../redux/actions/chatAction';
import {connect} from 'react-redux';
import ListMessage from '../ListMessage';
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: false,
      userIsTyping: '',
      messageObj: {},
      chatArray: [],
    };
  }
  componentDidMount() {
    this.loadChat();
  }
  UNSAFE_componentWillMount() {
    const {socket} = this.props;
    this.initSocket(socket);
  }
  /*
    username is name of sender
    userId is _id of sender
    message need to be format at server
  */
  loadChat = async () => {
    const {roomId} = this.props;
    const chats = await this.props.getChats(roomId);
    const tempChatArray = this.props.chats.chats;
    const temp = tempChatArray.find((element) => element._id == roomId);
    this.setState({chatArray: temp.chatArray});
  };

  initSocket = (socket) => {
    const {roomId} = this.props;
    socket.on(Config.Event.TYPING, ({userName, isTyping}) => {
      this.setState({isTyping: isTyping, userIsTyping: userName});
    });
    socket.on(Config.Event.MESSAGE_SENT, ({messageSent}) => {
      this.setState({messageObj: messageSent});
      const temp = this.props.afterPostMessage(messageSent, roomId);
      // this.setState({chatArray: temp});
      let tempChatArray = this.state.chatArray.concat(temp.payload.messageSent);
      this.setState({chatArray: tempChatArray});
    });
  };

  isMyMessage = () => {
    const {userData} = this.props.user;
    return messageObj.userId == userData._id;
  };

  render() {
    const {isTyping, userIsTyping, chatArray} = this.state;
    const {userData} = this.props.user;
    let annouceTyping =
      isTyping == true ? (
        <View style={styles.typingMainView}>
          <Text style={styles.textIsTyping}>
            {userIsTyping} is typing messages ...
          </Text>
        </View>
      ) : null;
    return (
      <View style={styles.container}>
        {annouceTyping}
        <ListMessage
          chatArray={chatArray}
          userId={userData._id}
          roomId={this.props.roomId}
          userName={userData.name + ' ' + userData.lastname}
        />
      </View>
    );
  }
}

const mapActionToProps = {
  getChats,
  afterPostMessage,
};
const mapStateToProps = (state) => ({
  user: state.userReducer,
  chats: state.chatReducer,
});

export default connect(mapStateToProps, mapActionToProps)(Message);
