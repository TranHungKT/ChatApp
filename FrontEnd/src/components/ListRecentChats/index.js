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
    return <Item item={item} />;
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

const Item = ({item}) => (
  <View style={styles.mainView}>
    <View style={styles.avatarView}>
      <AvatarComponent source={item.item.image} />
    </View>
    <StatusComponent
      title={item.item.name}
      lastMessage={
        !!item.item.lastMessageId ? item.item.lastMessageId.message : ''
      }
      createdAt={
        !!item.item.lastMessageId ? item.item.lastMessageId.createdAt : ''
      }
    />
    <Text>{item.item._id}</Text>
  </View>
);
