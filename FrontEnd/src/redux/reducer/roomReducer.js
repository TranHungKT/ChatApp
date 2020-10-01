import {GET_ROOM, CREATE_ROOM} from '../type';

const initialState = {
  room: [{}],
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
    default:
      return state;
  }
}
