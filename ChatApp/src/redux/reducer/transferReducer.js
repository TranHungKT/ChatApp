import { GET_TRANSFER } from '../type';

const initialState = {
	transfer: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_TRANSFER:
			return {
				...state,
				transfer: action.payload,
			};
		default:
			return state;
	}
}
