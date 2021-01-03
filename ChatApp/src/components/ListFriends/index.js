import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import StatusComponent from '../StatusComponent';
import { Config, Language } from '@common';
import { connect } from 'react-redux';

class ListFriends extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			friendIds: [],
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.socket != this.props.socket) {
			this.listenConnected(nextProps.socket);
		}
	}

	listenConnected = (socket) => {
		socket.on(Config.Event.CHECK_CONNECTED, (friendIds) => {
			this.setState({ friendIds });
		});
	};

	_renderItem = ({ item, index }) => {
		const { friendIds } = this.state;
		return (
			<View style={styles.itemView}>
				<TouchableOpacity style={styles.mainView}>
					<View style={styles.avatarView}>
						<AvatarComponent source={item.image} />
					</View>
					<StatusComponent
						type={Language.type.friends}
						title={item.userName}
						status={friendIds[index]}
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
	};
};

export default connect(mapStateToProps, mapActionToProps)(ListFriends);
