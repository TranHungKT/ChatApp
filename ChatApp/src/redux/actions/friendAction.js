import { GET_FRIENDS } from '../type';
import { Config } from '@common';

export const getFriend = () => async (dispatch) => {
	const friends = await fetch(`${Config.server}user/action/getFriend`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	const data = await friends.json();
	return dispatch({
		type: GET_FRIENDS,
		payload: data,
	});
};
