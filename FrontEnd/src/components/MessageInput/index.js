import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

import {Emoji, Voice, Camera, More} from '@svg';
import {Styles, Config} from '@common';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      height: 0,
    };
  }

  componentDidMount() {
    const {socket} = this.props;
    this.initSocket(socket);
  }

  initSocket = (socket) => {
    socket.on(Config.Event.MESSAGE_RECIEVED, this.addChat);
  };

  onChangeText = (message) => {
    this.setState({message: message});
  };

  /*This function will need  message, sender, and roomId to emit messagesent*/
  onSentMessage = (message) => {
    const {socket} = this.props;
    const {roomId, userId} = this.props;
    socket.emit(Config.Event.MESSAGE_SENT, {roomId, userId, message});
  };

  render() {
    let {height, message} = this.state;
    return (
      <View
        style={[
          styles.container,
          {height: Math.max(Styles.messageInputHeight, height + 8)},
        ]}>
        <View style={styles.moreButtonView}>
          <More height={28} width={28} />
        </View>

        <View style={styles.textInputView}>
          <View style={styles.view}>
            <TextInput
              placeholder="Aa"
              multiline={true}
              numberOfLines={10}
              onChangeText={this.onChangeText}
              onContentSizeChange={(event) => {
                this.setState({height: event.nativeEvent.contentSize.height});
              }}
              style={[
                styles.textInput,
                {
                  height: Math.max(Styles.messageInputHeight - 8, height),
                },
              ]}
              autoCorrect={false}
              onSubmitEditing={this.onSentMessage}
            />
            <Emoji height={28} width={28} style={{marginRight: 10}} />
          </View>
        </View>
        <View style={styles.functionView}>
          <Camera height={28} width={28} />
          <Voice height={28} width={28} />
        </View>
      </View>
    );
  }
}
