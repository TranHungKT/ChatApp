import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import {connect} from 'react-redux';
import {Language} from '@common';
class FriendSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createFriend = (_idRequest, _idReceiver, sender) => () => {
    Alert.alert(
      `${Language.requestFriend.confirmRequest}`,
      `${Language.requestFriend.content}`,
      [
        {
          text: `${Language.requestFriend.Cancel}`,
        },
        {
          text: `${Language.requestFriend.OK}`,
          onPress: () => this.makeFriend(_idRequest, _idReceiver, sender),
        },
      ],
    );
  };
  makeFriend = (_idRequest, _idReceiver, sender) => {
    const {socket} = this.props.socket;
  };
  render() {
    const {item} = this.props;
    let _idRequest = this.props.user.userData._id;
    let sender = this.props.user.userData.userName;
    let _idReceiver;
    return (
      <TouchableOpacity
        onPress={this.createFriend(_idRequest, _idReceiver, sender)}>
        <View style={styles.itemView}>
          <AvatarComponent isSmallAvatar={true} source={item.image} />
          <Text style={styles.itemName}>{item.userName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapActionToProps = {};
const mapStateToProps = (state) => ({
  user: state.userReducer,
  socket: state.socketReducer,
});

export default connect(mapStateToProps, mapActionToProps)(FriendSearch);
