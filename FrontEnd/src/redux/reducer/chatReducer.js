import {LOAD_CHAT, AFTER_POST_MESSAGE} from '../type';

const initialState = {
  chats: [],
  chatLoaded: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CHAT:
      return {
        ...state,
        chats: action.payload.data,
        chatLoaded: action.payload.roomId,
      };
    case AFTER_POST_MESSAGE:
      return {...state, chats: state.chats.concat(action.payload)};
    default:
      return state;
  }
}
