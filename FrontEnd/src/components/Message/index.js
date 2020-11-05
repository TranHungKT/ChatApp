import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Config} from '@common';
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: false,
      userIsTyping: '',
    };
  }
  componentDidMount() {
    const {socket} = this.props;
    this.initSocket(socket);
  }

  initSocket = (socket) => {
    socket.on(Config.Event.TYPING, ({userName, isTyping}) => {
      this.setState({isTyping: isTyping, userIsTyping: userName});
    });
  };

  render() {
    const {isTyping, userIsTyping} = this.state;
    let annouceTyping =
      isTyping == true ? (
        <View style={styles.typingMainView}>
          <Text style={styles.textIsTyping}>
            {userIsTyping} is typing messages ...
          </Text>
        </View>
      ) : null;

    return <View style={styles.container}>{annouceTyping}</View>;
  }
}
