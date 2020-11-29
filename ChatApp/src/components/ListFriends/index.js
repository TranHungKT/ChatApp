import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import StatusComponent from '../StatusComponent';
import { RouteNames, Config, Language } from '@common';
import { connect } from 'react-redux';

class ListFriends extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount = () => {
		const { socket } = this.props.socket;
		this.listenConnected(socket);
	};

	listenConnected = (socket) => {};

	_renderItem = (items) => {
		const item = items.item;
		return (
			<View style={styles.itemView}>
				<TouchableOpacity style={styles.mainView}>
					<View style={styles.avatarView}>
						<AvatarComponent source={item.image} />
					</View>
					<StatusComponent
						type={Language.type.friends}
						title={item.userName}
						lastMessage={!!item.lastMessageId ? item.lastMessageId.message : ''}
						createdAt={!!item.lastMessageId ? item.lastMessageId.createdAt : ''}
					/>
				</TouchableOpacity>
			</View>
		);
	};
	_keyExtractor = (item, index) => `${index}`;
	render() {
		const { friends } = this.props.friends;
		return (
			<View style={this.props.style}>
				<FlatList
					data={friends.friendList}
					renderItem={(items) => this._renderItem(items)}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	}
}

const mapActionToProps = {};
const mapStateToProps = (state) => {
	return {
		friends: state.friendReducer,
		socket: state.socketReducer,
	};
};

export default connect(mapStateToProps, mapActionToProps)(ListFriends);