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
    const {_id} = this.props.user;
    const socket = io(Config.server);
    socket.on('connect', () => {
      console.log('connected');
    });

    socket.emit(Config.Event.USER_CONNECTED, {_id});
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
