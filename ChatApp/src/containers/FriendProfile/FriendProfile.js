import React, { Component } from 'react';
import { View, Text, Image, Modal } from 'react-native';

import { ListImage } from '@components';

import Header from './Component/Header/Header';

import styles from './styles';

export default class FriendProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toogleModal: false,
		};
	}

	toogleModal = () => {
		this.setState((prevState) => ({ toogleModal: !prevState.toogleModal }));
	};

	render() {
		const {
			_idFriend,
			sender,
			_idRequest,
			friendData,
		} = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<Header toogleModal={this.toogleModal} />

				<View style={styles.profileView}>
					<Image source={{ uri: friendData.image }} style={styles.avatar} />
					<Text style={styles.name}>{friendData.userName}</Text>
					<Text style={styles.description}>
						Student of Bach Khoa University
					</Text>
				</View>
				<View style={styles.galleryView}>
					<ListImage gallery={friendData.gallery} />
				</View>
				<Modal></Modal>
			</View>
		);
	}
}
