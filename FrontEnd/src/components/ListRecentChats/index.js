import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import StatusComponent from '../StatusComponent';
export default class ListRecentChats extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderItem = (item) => {
    return (
      <View style={styles.mainView}>
        <View style={styles.avatarView}>
          <AvatarComponent source={item.item.image} />
        </View>
        <StatusComponent
          title={item.item.name}
          lastMessagge={item.item.lastMessagge}
        />
      </View>
    );
  };
  render() {
    const {rooms} = this.props;
    console.log(rooms);
    return (
      <FlatList
        data={rooms.room}
        renderItem={this._renderItem}
        keyExtractor={(item) => item._id}
      />
    );
  }
}
