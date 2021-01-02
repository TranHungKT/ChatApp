import { Config } from '@common';
import { SENT_MONEY, GET_TRANSFER } from '../type';

export const getTransfer = () => (dispatch) => {
	return fetch(`${Config.server}user/transfer/getTransfer`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			dispatch({
				type: GET_TRANSFER,
				payload: data,
			});
		});
};

export const sentMoney = () => (dispatch) => {};
