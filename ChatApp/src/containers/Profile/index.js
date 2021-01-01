import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Components
import HeaderProfile from './Component/HeaderProfile';

// Redux
import { connect } from 'react-redux';

// Styles
import styles from './styles';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { userData } = this.props.user;
		const { friends } = this.props.friend;
		console.log(friends);
		return (
			<View style={styles.container}>
				<HeaderProfile />

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
			</View>
		);
	}
}

const mapActionToProps = {};

const mapStateToProps = (state) => ({
	user: state.userReducer,
	friend: state.friendReducer,
});

export default connect(mapStateToProps, mapActionToProps)(Profile);
