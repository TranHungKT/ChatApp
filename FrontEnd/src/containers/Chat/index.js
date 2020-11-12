import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {MessageInput, Message, Header} from '@components';
import {connect} from 'react-redux';
import {getChats, afterPostMessage} from '../../redux/actions/chatAction';
import {getAvatarOfFriend} from '../../redux/actions/roomAction';
import {Config, Styles} from '@common';
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }
  UNSAFE_componentWillMount() {
    const {roomId, userId} = this.props.navigation.state.params;
    this.props.getAvatarOfFriend(roomId, userId);
  }

  render() {
    const {
      title,
      socket,
      roomId,
      sender,
      userId,
    } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Header type={Config.typeOfHeader.chats} title={title} />
        <Message socket={socket} roomId={roomId} />
        <MessageInput
          socket={socket}
          roomId={roomId}
          sender={sender}
          userId={userId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.app.backgroundColor,
  },
});

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
  chatReducer: state.chatReducer,
});

const mapActionToProps = {
  getChats,
  afterPostMessage,
  getAvatarOfFriend,
};

export default connect(mapStateToProps, mapActionToProps)(Chat);
