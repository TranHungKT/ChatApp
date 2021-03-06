import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar, GroupDevice, ListCommon, Header } from '@components';
import { Language, Config, Styles } from '@common';
import { getRooms } from '../../redux/actions/roomAction';
import { getFriend } from '../../redux/actions/friendAction';
import { initSocket } from '../../redux/actions/socketAction';
import { connect } from 'react-redux';
import io from 'socket.io-client';

class GroupChat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			socket: null,
		};
	}

	componentDidMount() {
		this.initSocket();
	}

	initSocket = async () => {
		const socket = io(Config.server);
		this.props.initSocket(socket);
		this.annouceConnectedUser(socket);
		this.joinRoom(socket);
		this.getListFriend(socket);
		this.listenFriendRequest(socket);
		this.setState({ socket });
	};

	annouceConnectedUser = (socket) => {
		const { _id } = this.props.user.userData;
		socket.emit(Config.Event.USER_CONNECTED, _id);
	};

	joinRoom = async (socket) => {
		const getRooms = await this.props.getRooms();
		const rooms = getRooms.payload;
		const roomIds = [];
		rooms.forEach((room) => {
			roomIds.push(room._id);
		});
		socket.emit(Config.Event.JOIN_ROOM, roomIds);
	};

	listenFriendRequest = (socket) => {
		socket.on(Config.Event.REFUSE_FRIEND, ({ _idRequest, sender }) => {
			console.log('Friend Request', sender);
		});
		socket.on(Config.Event.REQUEST_FRIEND, ({ _idRequest, sender }) => {
			console.log('Listen to request success');
		});
	};
	/*
	Because we dont want to emit list user connected to all user in socket so we need to check every 20s with user
	*/
	getListFriend = async (socket) => {
		const listFriend = await this.props.getFriend();
		const socketID = socket.id;
		const friendIds = listFriend.payload.friendList.map((friend) => friend._id);
		this.checkFriendConnected(socket, friendIds, socketID);
		this.interval = setInterval(() => {
			this.checkFriendConnected(socket, friendIds, socketID);
		}, 20000);
	};

	checkFriendConnected = (socket, friendIds, socketID) => {
		socket.emit(Config.Event.CHECK_CONNECTED, { friendIds, socketID });
	};

	componentWillUnmount() {
		clearInterval(this.interval);
	}
	render() {
		const { socket } = this.state;

		const { userData } = this.props.user;
		const { navigation } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
				<Header navigation={navigation} type={'group'} />
				<GroupDevice text={Language.groupDevice.recentChat} />
				<ListCommon
					type={Language.type.rooms}
					navigation={navigation}
					socket={socket}
					sender={userData.userName}
					userId={userData._id}
					style={{ flex: 0.5 }}
				/>
				<GroupDevice text={Language.groupDevice.availableFriends} />
				<ListCommon
					type={Language.type.friends}
					style={{ flex: 0.5 }}
					socket={socket}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	// rooms: state.roomReducer,
	user: state.userReducer,
});
const mapActionsToProps = {
	getRooms,
	initSocket,
	getFriend,
};

export default connect(mapStateToProps, mapActionsToProps)(GroupChat);
