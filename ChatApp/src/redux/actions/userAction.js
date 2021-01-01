import { LOAD_DATA, ADD_IMAGE } from '../type';
import { Config } from '@common';

export const getUserData = () => (dispatch) => {
	return fetch(`${Config.server}user/action/meData`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'appx2lication/json',
		},
	})
		.then((response) => {
			if (response.status == 200) {
				return response
					.json()
					.then((data) => {
						console.log('data', data);
						return dispatch({
							type: LOAD_DATA,
							payload: data,
						});
					})
					.catch((err) => console.log(err));
			}
		})
		.catch((err) => console.log(err));
};

export const login = (email, password) => (dispatch) => {
	//   dispatch({type: LOADING});
	return fetch(`${Config.server}user/action/auth`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			email: `${email}`,
			password: `${password}`,
		}),
	}).then((response) => {
		if (response.status == 200) {
			return dispatch(getUserData());
		}
	});
};

export const addImage = (url) => (dispatch) => {
	return dispatch({
		type: ADD_IMAGE,
		payload: url,
	});
};
