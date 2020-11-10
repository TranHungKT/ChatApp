import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
  Animated,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {connect} from 'react-redux';
import {Styles, Color} from '@common';
import ListSpacer from '../ListSpacer';
import moment from 'moment';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ListMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourFriend: {},
      chat: [],
    };
  }

  componentDidMount() {
    this.setState({yourFriend: this.props.yourFriend});
    this.reverse();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.chatArray !== this.props.chatArray) {
      this.reverse();
    }
  }
  reverse = () => {
    let temp = this.props.chatArray.slice().reverse();
    this.setState({chat: temp});
  };

  _renderItem = (items) => {
    const item = items.item;
    // console.log(item);
    return (
      <View>
        {this.isMyMessage(item.sender) ? (
          <View style={styles.container}>
            <View
              style={[
                styles.messageBox,
                {
                  backgroundColor: Color.message.myMessBackground,
                  marginLeft: 0,
                  marginRight: 70,
                },
              ]}>
              <Text style={styles.name}>{item.sender}</Text>
              <View style={styles.myMessage}>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>
                  {moment(item.updatedAt).format('LT')}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View
              style={[
                styles.messageBox,
                {
                  backgroundColor: Color.message.notMyMessBackground,
                  marginLeft: 70,
                  marginRight: 0,
                },
              ]}>
              <Text style={styles.name}>{item.sender}</Text>
              <View style={styles.myMessage}>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>
                  {moment(item.updatedAt).format('LT')}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  isMyMessage = (senderCheck) => {
    const {sender} = this.props;
    return sender === senderCheck;
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <ListSpacer>
        {({flatListHeight}) => (
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Styles.messageInputHeight}>
            <AnimatedFlatList
              inverted
              data={this.state.chat}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              contentContainerStyle={{
                paddingTop: Styles.messageInputHeight * 1.5,
              }}
            />
          </KeyboardAvoidingView>
        )}
      </ListSpacer>
    );
  }
}

// class Message extends React.PureComponent{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return()
//     }
// }

const mapActionToProps = {};

const mapStateToProps = (state) => ({
  chats: state.chatReducer,
  yourFriend: state.roomReducer.yourFriend,
});

export default connect(mapStateToProps, mapActionToProps)(ListMessage);
