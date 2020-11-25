import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SearchBar, GroupDevice, ListCommon} from '@components';
import {Language, Config} from '@common';
import {getRooms} from '../../redux/actions/roomAction';
import {initSocket} from '../../redux/actions/socketAction';
import {connect} from 'react-redux';
import io from 'socket.io-client';

class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
    };
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = async () => {
    const socket = io(Config.server);
    this.props.initSocket(socket);
    socket.on('connect', () => {
      console.log('connected again');
    });
    this.annouceConnectedUser(socket);
    this.joinRoom(socket);
    this.listenFriendRequest(socket);
    this.setState({socket});
  };

  annouceConnectedUser = (socket) => {
    const {_id} = this.props.user.userData;
    socket.emit(Config.Event.USER_CONNECTED, _id);
  };

  joinRoom = async (socket) => {
    let {cookie} = this.props.navigation.state.params;
    const getRooms = await this.props.getRooms(cookie);
    let rooms = getRooms.payload;
    let roomIds = [];
    rooms.forEach((room) => {
      roomIds.push(room._id);
    });
    socket.emit(Config.Event.JOIN_ROOM, roomIds);
  };

  listenFriendRequest = (socket) => {
    socket.on(Config.Event.REFUSE_FRIEND, ({_idRequest, sender}) => {
      console.log('Friend Request', sender);
    });
    socket.on(Config.Event.REQUEST_FRIEND, ({_idRequest, sender}) => {
      console.log('Listen to request success');
    });
  };

  render() {
    const {socket} = this.state;

    const {userData} = this.props.user;
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        {/* <SearchBar /> */}
        <GroupDevice text={Language.groupDevice.recentChat} />
        <ListCommon
          type={'rooms'}
          navigation={this.props.navigation}
          socket={socket}
          sender={userData.userName}
          userId={userData._id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // rooms: state.roomReducer,
  user: state.userReducer,
});
const mapActionsToProps = {
  getRooms,
  initSocket,
};

export default connect(mapStateToProps, mapActionsToProps)(GroupChat);
