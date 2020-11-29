import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ListRecentChats from '../ListRecentChats';
import ListFriends from '../ListFriends';
import { Language } from '@common';
const ListCommon = (props) => {
	if (props.type === Language.type.rooms) {
		return <ListRecentChats {...props} />;
	}
	if (props.type === Language.type.friends) {
		return <ListFriends {...props} />;
	}
};

export default ListCommon;
