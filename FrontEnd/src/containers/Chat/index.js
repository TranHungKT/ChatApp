import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import {getChats, afterPostMessage} from '../../redux/actions/chatAction';
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
    this.socket = io('http://192.168.1.19:3000');
    this.props.getChats();
    this.socket.on('Output chat message', (msg) => {
      this.props.afterPostMessage(msg);
    });
    // console.log(this.state.chatMessage);
  }

  submitChatMessage() {
    let {_id, name, lastname, image} = this.props.userReducer;
    let {chatMessage} = this.state;
    let type = 'image';
    let nowTime = moment();
    this.socket.emit('Input chat message', {
      _id,
      name,
      lastname,
      image,
      chatMessage,
      type,
      nowTime,
    });
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages =
      this.props.chatReducer.chats !== undefined &&
      this.props.chatReducer.chats.map((message) => (
        <Text key={message._v}>{message.message}</Text>
      ));
    // let chatMessages /= <Text>Hello</Text>;

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderWidth: 2}}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({chatMessage});
          }}
        />
        {chatMessages}
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
};

export default connect(mapStateToProps, mapActionToProps)(Chat);
