import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Config} from '@common';
import {getChats} from '../../redux/actions/chatAction';
import {connect} from 'react-redux';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: false,
      userIsTyping: '',
      messageObj: {},
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
    const {roomId} = this.props;
    return await this.props.getChats(roomId);
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
    console.log('temp', this.state.chatArray);
    return <View style={styles.container}>{annouceTyping}</View>;
  }
}

const mapActionToProps = {
  getChats,
};
const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps, mapActionToProps)(Message);
