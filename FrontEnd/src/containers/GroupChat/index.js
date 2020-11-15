import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SearchBar, GroupDevice, ListCommon} from '@components';
import {Language, Config} from '@common';
import {getRooms} from '../../redux/actions/roomAction';
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
    let {cookie} = this.props.navigation.state.params;
    const getRooms = await this.props.getRooms(cookie);
    let rooms = getRooms.payload;
    const {_id} = this.props.user.userData;
    const socket = io(Config.server);
    let roomIds = [];
    socket.on('connect', () => {
      console.log('connected again');
    });
    rooms.forEach((room) => {
      roomIds.push(room._id);
    });

    socket.emit(Config.Event.USER_CONNECTED, _id);
    socket.emit(Config.Event.JOIN_ROOM, roomIds);
    this.setState({socket});
  };

  render() {
    const {socket} = this.state;

    const {userData} = this.props.user;
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <SearchBar />
        <GroupDevice text={Language.groupDevice.recentChat} />
        <ListCommon
          type={'rooms'}
          navigation={this.props.navigation}
          socket={socket}
          sender={userData.name + ' ' + userData.lastname}
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
};

export default connect(mapStateToProps, mapActionsToProps)(GroupChat);
