import {LOAD_CHAT, AFTER_POST_MESSAGE, LOAD_ROOM} from '../type';

const initialState = {
  rooms: [{}],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CHAT:
      return {...state, chats: action.payload};
    case AFTER_POST_MESSAGE:
      return {...state, chats: state.chats.concat(action.payload)};
    case LOAD_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      return state;
  }
}
