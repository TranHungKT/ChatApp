import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Components
import HeaderProfile from './Component/HeaderProfile';
import ListImage from './Component/ListImage';

// Redux
import { connect } from 'react-redux';
import { addImage } from '../../redux/actions/userAction';

// Library
import { launchImageLibrary } from 'react-native-image-picker';

// Styles
import styles from './styles';

// Config
import { Config } from '@common';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	selectImage = () => {
		launchImageLibrary(
			{
				mediaType: 'photo',
				maxHeight: 2000,
				maxWidth: 2000,
			},
			async (response) => {
				const formData = new FormData();
				formData.append('file', {
					uri: response.uri,
					name: response.fileName,
					type: response.type,
				});
				try {
					const response = await fetch(
						`${Config.server}user/upload/image/gallery`,
						{
							method: 'POST',
							headers: {
								Accept: 'application/json',
								'Content-type': 'multipart/form-data',
							},
							body: formData,
						}
					);
					const data = await response.json();
					console.log('data', data);
					this.addImageToRedux(data.url);
				} catch (error) {
					console.log('error upload gallery', error);
				}
			}
		);
	};

	addImageToRedux = (url) => {
		this.props.addImage(url);
	};

	render() {
		const { userData } = this.props.user;
		const { friends } = this.props.friend;
		console.log({ userData });
		return (
			<View style={styles.container}>
				<HeaderProfile onPressCamera={this.selectImage} />

				<View style={styles.profileView}>
					<Image source={{ uri: userData.image }} style={styles.avatar} />
					<Text style={styles.name}>{userData.userName}</Text>
					<Text style={styles.description}>
						Student of Bach Khoa University
					</Text>
					<View style={styles.friendListView}>
						<Text style={styles.textFriend}>
							Your Friend: {friends.friendList.length} |
						</Text>
						<Text style={styles.textFriend}>
							Your Request: {friends.request.length} |
						</Text>
						<Text style={styles.textFriend}>
							Your Request: {friends.waiting.length}
						</Text>
					</View>
				</View>
				<View style={styles.galleryView}>
					<ListImage gallery={userData.gallery} />
				</View>
			</View>
		);
	}
}

const mapActionToProps = { addImage };

const mapStateToProps = (state) => ({
	user: state.userReducer,
	friend: state.friendReducer,
});

export default connect(mapStateToProps, mapActionToProps)(Profile);
