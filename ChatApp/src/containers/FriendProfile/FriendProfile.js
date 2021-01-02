import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { ListImage } from '@components';

import { connect } from 'react-redux';

import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';

import Header from './Component/Header/Header';

import styles from './styles';

class FriendProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowModal: false,
			isFriend: 0, // enum with 0 : not friend, 1 : waiting Friend, 2 : request friend, 3: friend
		};
	}

	componentDidMount() {
		const { _idFriend } = this.props.navigation.state.params;
		this.checkIsFriend(_idFriend);
	}

	toogleModal = () => {
		this.setState((prevState) => ({ isShowModal: !prevState.isShowModal }));
	};

	checkIsFriend = (_idFriend) => {
		const { friend } = this.props;

		friend.friendList.forEach((element) => {
			if (element._id == _idFriend) {
				return this.setState({ isFriend: 3 });
			}
		});
		if (friend.request.includes(_idFriend)) {
			return this.setState({ isFriend: 2 });
		} else if (friend.waiting.includes(_idFriend)) {
			return this.setState({ isFriend: 1 });
		}
	};

	render() {
		const {
			_idFriend,
			sender,
			_idRequest,
			friendData,
			socket,
		} = this.props.navigation.state.params;
		const { isShowModal, isFriend } = this.state;

		return (
			<View style={styles.container}>
				<Header
					toogleModal={this.toogleModal}
					userName={friendData.userName}
					sender={sender}
					_idRequest={_idRequest}
					_idFriend={_idFriend}
					isFriend={isFriend}
					socket={socket}
				/>

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
				<Modal
					isVisible={isShowModal}
					animationIn='slideInUp'
					backdropOpacity={0.5}
					useNativeDriver={true}
					backdropTransitionInTiming={0}
					backdropTransitionOutTiming={0}
					onBackdropPress={this.toogleModal}
					style={styles.modalView}
				>
					<QRCode
						value={friendData.userName + ': ' + _idFriend}
						size={250}
					></QRCode>
				</Modal>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	friend: state.friendReducer.friends,
});

export default connect(mapStateToProps)(FriendProfile);
