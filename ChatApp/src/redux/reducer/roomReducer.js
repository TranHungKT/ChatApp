import { act } from 'react-test-renderer';
import {
	GET_ROOM,
	CREATE_ROOM,
	AVATAR_OF_FRIEND,
	UPDATE_LAST_MESSAGE,
} from '../type';

const initialState = {
	room: [],
	yourFriend: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ROOM:
			return {
				...state,
				room: action.payload,
			};
		case CREATE_ROOM:
			return {
				...state,
				room: [...room, action.payload],
			};
		case AVATAR_OF_FRIEND:
			const { roomId, userId } = action.payload;
			const tempRoom = state.room;
			const tempFriendArray = tempRoom.find(
				(elenment) => elenment._id == roomId
			);
			const friendArray = tempFriendArray.friendsInRoom;
			const yourFriend = friendArray.find((element) => element._id !== userId);
			return {
				...state,
				yourFriend: yourFriend,
			};
		case UPDATE_LAST_MESSAGE:
			const { sender, message } = action.payload;
			const updateRoom = state.room;
			updateRoom.forEach((room) => {
				if (room._id == action.payload.roomId) {
					room.lastMessageId.message = message;
					room.lastMessageId.createdAt = Date.now();
					room.lastMessageId.sender = sender;
					updateRoom.unshift(updateRoom.splice(updateRoom.indexOf(room), 1)[0]);
				}
			});

			return {
				...state,
				room: [...updateRoom],
				yourFriend: state.yourFriend,
			};
		default:
			return state;
	}
}
function sortRoom(room) {
	room.sort(function (a, b) {});
}
