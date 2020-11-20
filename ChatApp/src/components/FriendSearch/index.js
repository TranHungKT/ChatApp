import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import {connect} from 'react-redux';
class FriendSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createFriend = (_idRequest, _idReceiver, sender) => {};
  render() {
    const {item} = this.props;
    let _idRequest = this.props.user.userData._id;
    let sender = this.props.user.userData.userName;
    let _idReceiver;
    return (
      <TouchableOpacity onPress={this.createFriend}>
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
});

export default connect(mapStateToProps, mapActionToProps)(FriendSearch);
