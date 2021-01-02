import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import AvatarComponent from '../AvatarComponent';
import { connect } from 'react-redux';
import { Config, Language, RouteNames } from '@common';
class FriendSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	goToFriendProfile = async () => {
		const { item, socket } = this.props;
		const _idRequest = this.props.user.userData._id;
		const sender = this.props.user.userData.userName;
		const _idFriend = item._id;
		try {
			const responseFriend = await fetch(
				`${Config.server}user/action/friendData`,
				{
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						_idFriend: _idFriend,
					}),
				}
			);

			const friendData = await responseFriend.json();

			this.props.navigation.navigate(RouteNames.FriendProfile, {
				friendData: friendData,
				_idFriend: _idFriend,
				_idRequest: _idRequest,
				sender: sender,
				socket: socket,
			});
		} catch (err) {
			console.log('get friend data FE', err);
		}
	};

	render() {
		const { item } = this.props;
		return (
			<TouchableOpacity onPress={this.goToFriendProfile}>
				<View style={styles.itemView}>
					<AvatarComponent isSmallAvatar={true} source={item.image} />
					<Text style={styles.itemName}>{item.userName}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const mapActionToProps = {};
const mapStateToProps = (state) => ({
	user: state.userReducer,
	socket: state.socketReducer,
});

export default connect(mapStateToProps, mapActionToProps)(FriendSearch);
