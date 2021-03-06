import {
	CREATE_ROOM,
	GET_ROOM,
	AVATAR_OF_FRIEND,
	UPDATE_LAST_MESSAGE,
} from '../type';
import { Config } from '@common';
export const getRooms = () => (dispatch) => {
	return fetch(`${Config.server}user/action/getRoom`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		return response
			.json()
			.then((data) => {
				return dispatch({
					type: GET_ROOM,
					payload: data,
				});
			})
			.catch((err) => console.log(err));
	});
};

export const createRoom = (idReceiver) => (dispatch) => {
	return fetch(`${Config.server}user/action/createRoom`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		return response
			.json()
			.then((data) => {
				return dispatch({
					type: CREATE_ROOM,
					payload: data,
				});
			})
			.catch((err) => console.log(err));
	});
};

export const getAvatarOfFriend = (roomId, userId) => (dispatch) => {
	const data = { roomId, userId };
	return dispatch({
		type: AVATAR_OF_FRIEND,
		payload: data,
	});
};

export const updateLastMessage = (roomId, sender, message) => (dispatch) => {
	const data = { roomId, sender, message };
	return dispatch({
		type: UPDATE_LAST_MESSAGE,
		payload: data,
	});
};
