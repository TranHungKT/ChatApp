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
    // case AFTER_POST_MESSAGE:
    //   let chatsAfterPost = [];
    //   state.chats = state.chats.forEach((element) => {
    //     if (element._id == action.payload.roomId) {
    //       console.log('ele', element._id);
    //       chatsAfterPost =  element.chatArray.concat(action.payload.messageSent);
    //     }
    //   });
    //   // // console.log('cccc', state.chats);
    //   // // // console.log('temp', tempChatArray1);
    //   // // // tempChatArray1.chatArray.push(action.payload.messageSent);
    //   // let a = state.chats.chat.indexOf(action.payload.roomId);
    //   // console.log('state.chats', state.chats);
    //   // console.log('index', a);
    //   // console.log('roomId', action.payload.roomId);
    //   return {...state};
    case AFTER_POST_MESSAGE:
      const {messageSent, roomId} = action.payload;
      // let a = state.chats.indexOf({_id: roomId});
      // console.log('a', a);
      console.log('roomId', roomId);
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
