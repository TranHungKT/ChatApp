import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ListRecentChats from '../ListRecentChats';
const ListCommon = (props) => {
  if (props.type === 'rooms') {
    return <ListRecentChats {...props} />;
  }
  if (props.type === 'friends') {
    return <ListFriends {...props} />;
  }
};

export default ListCommon;
