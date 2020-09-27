import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ListRecentChats from '../ListRecentChats';
const ListCommon = (props) => {
  // if (props.type === 'short') {
  return <ListRecentChats {...props} />;
  // }
};

export default ListCommon;
