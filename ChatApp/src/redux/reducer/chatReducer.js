import {act} from 'react-test-renderer';
import {LOAD_CHAT, AFTER_POST_MESSAGE} from '../type';

const initialState = {
  chats: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CHAT:
      let tempChatArray = [];
      tempChatArray = state.chats.concat(action.payload[0]);
      return {
        ...state,
        chats: tempChatArray,
      };
    case AFTER_POST_MESSAGE:
      const {messageSent, roomId} = action.payload;
      state.chats.forEach((chat) => {
        if (chat._id === roomId) {
          chat.chatArray = chat.chatArray.concat(messageSent);
        }
      });
      return {
        ...state,
        chats: state.chats,
      };
    default:
      return state;
  }
}
