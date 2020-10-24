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

  submitChatMessage() {
    // let {_id, name, lastname, image} = this.props.userReducer.userData;
    // let {chatMessage} = this.state;
    // let type = 'image';
    // let nowTime = moment();
    // let to = '5f4711dafafd5608e477c735';
    // this.socket.emit('Client_send_messages', {
    //   _id,
    //   name,
    //   lastname,
    //   image,
    //   chatMessage,
    //   type,
    //   nowTime,
    //   to,
    // });
    // this.setState({chatMessage: ''});
  }

  render() {
    const {title} = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Header type={Config.typeOfHeader.chats} title={title} />
        <Message style={{flex: 0.8, backgroundColor: 'red'}} />
        <MessageInput style={styles.messInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  messInput: {
    position: 'absolute',
    bottom: 0,
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
