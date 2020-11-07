import {LOAD_CHAT, LOADING, AFTER_POST_MESSAGE, LOAD_ROOM} from '../type';
import {Config} from '@common';

var loadedChat = [];
function isLoaded(roomId) {
  return loadedChat.includes(roomId);
}

export const getChats = (roomId) => (dispatch) => {
  if (isLoaded(roomId)) {
    return;
  }
  loadedChat.push(roomId);
  return fetch(`${Config.server}user/action/getRoom/chatArray`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      roomId: roomId,
    }),
  })
    .then((response) => {
      return response
        .json()
        .then((data) => {
          let chatArr = {data, roomId};
          return dispatch({
            type: LOAD_CHAT,
            payload: data,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export const afterPostMessage = (messageSent, roomId) => (dispatch) => {
  let data = {messageSent, roomId};
  return dispatch({
    type: AFTER_POST_MESSAGE,
    payload: data,
  });
};
