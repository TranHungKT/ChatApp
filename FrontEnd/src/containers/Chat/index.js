import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import io from 'socket.io-client';
import {connect} from 'react-redux';
import {
  getChats,
  afterPostMessage,
  getRooms,
} from '../../redux/actions/chatAction';
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
    let {cookie} = this.props.navigation.state.params;
    this.socket = io('http://192.168.1.5:3000');
    this.props.getRooms(cookie);
    this.socket.on('Output chat message', (msg) => {
      this.props.afterPostMessage(msg);
    });
  }

  submitChatMessage() {
    let {_id, name, lastname, image} = this.props.userReducer.userData;
    let {chatMessage} = this.state;
    let type = 'image';
    let nowTime = moment();
    let to = '5f4711dafafd5608e477c735';
    this.socket.emit('Input chat message', {
      _id,
      name,
      lastname,
      image,
      chatMessage,
      type,
      nowTime,
      to,
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
  getRooms,
};

export default connect(mapStateToProps, mapActionToProps)(Chat);
