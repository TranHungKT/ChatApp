import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import { Color, Config, Language } from '@common';

export default class HeaderProfile extends Component {
	requestFriend = () => {
		const { _idRequest, _idFriend, sender } = this.props;
		return (
			<TouchableOpacity
				onPress={this.createFriend(_idRequest, _idFriend, sender)}
			>
				<Icon name='user-plus' color={Color.activeBackgroundColor} size={30} />
			</TouchableOpacity>
		);
	};

	createFriend = (_idRequest, _idFriend, sender) => () => {
		Alert.alert(
			`${Language.requestFriend.confirmRequest}`,
			`${Language.requestFriend.content}`,
			[
				{
					text: `${Language.requestFriend.Cancel}`,
				},
				{
					text: `${Language.requestFriend.OK}`,
					onPress: () => this.makeFriend(_idRequest, _idFriend, sender),
				},
			]
		);
	};
	makeFriend = (_idRequest, _idFriend, sender) => {
		const { socket } = this.props.socket;
		console.log({ socket });
		const socketID = socket.id;
		socket.emit(Config.Event.REQUEST_FRIEND, {
			_idRequest,
			_idFriend,
			sender,
			socketID,
		});
	};

	responseRequest = () => {
		return (
			<TouchableOpacity
				style={styles.responseRequest}
				onPress={this.acceptFriend}
			>
				<Text style={styles.responseRequestText}>Accept</Text>
			</TouchableOpacity>
		);
	};

	waiting = () => {
		return (
			<TouchableOpacity
				style={styles.responseRequest}
				onPress={this.acceptFriend}
			>
				<Text style={styles.responseRequestText}>Waiting</Text>
			</TouchableOpacity>
		);
	};

	acceptFriend = async () => {
		const { _idFriend } = this.props;
		return await fetch(`${Config.server}user/action/acceptFriend`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				_idFriend: _idFriend,
			}),
		});
	};

	renderIconFriend = () => {
		const { isFriend } = this.props;
		console.log({ isFriend });
		if (isFriend == 3) {
			return (
				<Icon5
					name='user-check'
					color={Color.activeBackgroundColor}
					size={30}
				/>
			);
		} else if (isFriend == 2) {
			return this.responseRequest();
		} else if (isFriend == 1) {
			return this.waiting();
		} else if (isFriend == 0) {
			return this.requestFriend();
		}
	};

	render() {
		const { userName, toogleModal } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => toogleModal()}
				>
					<Icon name='qrcode' color={Color.activeBackgroundColor} size={30} />
				</TouchableOpacity>

				<View style={styles.title}>
					<Text style={styles.titleText}>{userName}</Text>
				</View>

				<View
					style={styles.svgBigView}
					// onPress={this.createFriend(_idRequest, _idFriend, sender)}
				>
					{this.renderIconFriend()}
				</View>
			</View>
		);
	}
}
