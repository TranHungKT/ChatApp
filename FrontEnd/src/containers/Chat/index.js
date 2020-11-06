import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import {MessageInput, Message, Header} from '@components';
import {connect} from 'react-redux';
import {
  getChats,
  afterPostMessage,
  // getRooms,
} from '../../redux/actions/chatAction';
import {Config} from '@common';

import moment from 'moment';
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    // this.socket.on('Output_chat_message', (msg) => {
    //   console.log('Out', msg);
    //   this.props.afterPostMessage(msg);
    // });
  }

  render() {
    const {
      title,
      socket,
      roomId,
      userName,
      userId,
      chatId,
    } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Header type={Config.typeOfHeader.chats} title={title} />
        <Message socket={socket} chatId={chatId} />
        <MessageInput
          socket={socket}
          roomId={roomId}
          userName={userName}
          userId={userId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
  chatReducer: state.chatReducer,
});

const mapActionToProps = {
  getChats,
  afterPostMessage,
  // getRooms,
};

export default connect(mapStateToProps, mapActionToProps)(Chat);
