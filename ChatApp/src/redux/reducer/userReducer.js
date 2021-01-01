import { LOAD_DATA, ADD_IMAGE } from '../type';

const initialState = {
	userData: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOAD_DATA:
			return {
				...state,
				userData: action.payload,
			};
		case ADD_IMAGE:
			return {
				...state,
				userData: {
					...state.userData,
					gallery: [...state.userData.gallery, action.payload],
				},
			};
		default:
			return state;
	}
}
