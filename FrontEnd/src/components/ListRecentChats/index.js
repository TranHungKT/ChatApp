import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import StatusComponent from '../StatusComponent';
import {RouteNames, Config} from '@common';
import {useStore} from 'react-redux';

export default class ListRecentChats extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigateToChat = (item) => () => {
    const {socket, userName, userId} = this.props;
    this.props.navigation.navigate(RouteNames.Chat, {
      title: item.name,
      socket: socket,
      roomId: item._id,
      userName: userName,
      userId: userId,
    });
  };

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
    const {room} = this.props.rooms;
    return (
      <View>
        <FlatList
          data={room}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
