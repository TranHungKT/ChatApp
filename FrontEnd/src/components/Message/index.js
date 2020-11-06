import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Config} from '@common';

import {connect} from 'react-redux';

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
    const {socket} = this.props;
    this.initSocket(socket);
    this.loadChat();
  }
  /*
    username is name of sender
    userId is _id of sender
    message need to be format at server
  */
  loadChat = async () => {
    let tempChat = await this.fetchChat();
    this.setState({chatArray: tempChat});
  };
  fetchChat = async () => {
    const {chatId} = this.props;
    let tempChatArray = await fetch(
      `${Config.server}user/action/getChatsInRoom`,
      {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: chatId,
        }),
      },
    );
    console.log('tempChatArray', tempChatArray);
    if (tempChatArray) {
      return tempChatArray;
    } else {
      console.error('Cant fetch chat');
    }
  };
  initSocket = (socket) => {
    socket.on(Config.Event.TYPING, ({userName, isTyping}) => {
      this.setState({isTyping: isTyping, userIsTyping: userName});
    });
    socket.on(Config.Event.MESSAGE_SENT, (messageSent) => {
      this.setState({messageObj: messageSent});
    });
  };

  isMyMessage = () => {
    const {userData} = this.props.user;
    return messageObj.userId == userData._id;
  };

  render() {
    const {isTyping, userIsTyping} = this.state;
    const {userData} = this.props.user;
    let annouceTyping =
      isTyping == true ? (
        <View style={styles.typingMainView}>
          <Text style={styles.textIsTyping}>
            {userIsTyping} is typing messages ...
          </Text>
        </View>
      ) : null;
    console.log(this.state.chatArray);
    return <View style={styles.container}>{annouceTyping}</View>;
  }
}

const mapActionToProps = {};
const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps, mapActionToProps)(Message);
