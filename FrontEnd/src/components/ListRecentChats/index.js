import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import StatusComponent from '../StatusComponent';
import {RouteNames, Config} from '@common';
import {connect} from 'react-redux';

class ListRecentChats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigateToChat = (item) => () => {
    const {sender, userId, socket} = this.props;
    this.props.navigation.navigate(RouteNames.Chat, {
      title: item.name,
      socket: socket,
      roomId: item._id,
      sender: sender,
      userId: userId,
    });
  };
  shouldComponentUpdate(nextProps) {
    if (nextProps.rooms.room !== this.props.rooms.room) {
      console.log('His');
      return true;
    }
    return true;
  }
  _renderItem = (items) => {
    const {item} = items;
    return (
      <TouchableOpacity
        style={styles.mainView}
        onPress={this.navigateToChat(item)}>
        <View style={styles.avatarView}>
          <AvatarComponent source={item.image} />
        </View>
        <StatusComponent
          title={item.name}
          lastMessage={!!item.lastMessageId ? item.lastMessageId.message : ''}
          createdAt={!!item.lastMessageId ? item.lastMessageId.createdAt : ''}
        />
      </TouchableOpacity>
    );
  };
  _keyExtractor = (item, index) => index.toString();
  render() {
    let rooms = this.props.rooms;
    console.log('rooms', rooms);
    return (
      <View>
        <FlatList
          data={this.props.rooms}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapActionToProps = {};
const mapStateToProps = (state) => {
  return {
    rooms: state.roomReducer.room,
  };
};

export default connect(mapStateToProps, mapActionToProps)(ListRecentChats);
