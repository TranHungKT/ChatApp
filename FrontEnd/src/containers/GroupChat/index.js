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
    let {cookie} = this.props.navigation.state.params;
    this.props.getRooms(cookie);
    this.initSocket();
  }

  initSocket() {
    const {_id} = this.props.user.userData;
    const rooms = this.props.rooms.room;
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
  }

  render() {
    const {socket} = this.state;
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <SearchBar />
        <GroupDevice text={Language.groupDevice.recentChat} />
        <ListCommon
          rooms={this.props.rooms}
          type={'rooms'}
          navigation={this.props.navigation}
          socket={socket}
          userId={this.props.user._id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.roomReducer,
  user: state.userReducer,
});
const mapActionsToProps = {
  getRooms,
};

export default connect(mapStateToProps, mapActionsToProps)(GroupChat);
