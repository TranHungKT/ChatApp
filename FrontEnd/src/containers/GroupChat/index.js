import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SearchBar, GroupDevice, ListCommon} from '@components';
import {Language} from '@common';
import {getRooms} from '../../redux/actions/roomAction';
import {connect} from 'react-redux';

class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let {cookie} = this.props.navigation.state.params;
    this.props.getRooms(cookie);
  }
  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <SearchBar />
        <GroupDevice text={Language.groupDevice.recentChat} />
        <ListCommon rooms={this.props.rooms} type={'rooms'} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.roomReducer,
});
const mapActionsToProps = {
  getRooms,
};

export default connect(mapStateToProps, mapActionsToProps)(GroupChat);
