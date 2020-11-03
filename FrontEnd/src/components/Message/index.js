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
      this.setState({isTyping: true, userIsTyping: userName});
    });
  };

  render() {
    const {isTyping, userIsTyping} = this.state;
    return (
      <View style={styles.container}>
        {isTyping == true ? (
          <View>
            <Text style={{color: 'white'}}>{userIsTyping}</Text>
          </View>
        ) : (
          <View>
            <Text style={{color: 'white'}}>{userIsTyping} stop typing</Text>
          </View>
        )}
      </View>
    );
  }
}
