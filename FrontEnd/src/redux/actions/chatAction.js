import {LOAD_CHAT, LOADING, AFTER_POST_MESSAGE, LOAD_ROOM} from '../type';

export const getRooms = (cookie) => (dispatch) => {
  return fetch('http://192.168.1.19:3000/user/action/getRoom', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
  }).then((response) => {
    return response
      .json()
      .then((data) => {
        return dispatch({
          type: LOAD_ROOM,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  });
};

export const getChats = (cookie) => (dispatch) => {
  // dispatch({type: LOADING})
  return fetch('http://192.168.1.19:3000/user/action/getChats', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cookie: cookie,
    },
  })
    .then((response) => {
      if (response.status == 200) {
        return response
          .json()
          .then((data) => {
            return dispatch({
              type: LOAD_CHAT,
              payload: data,
            });
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

export const afterPostMessage = (data) => (dispatch) => {
  dispatch({
    type: AFTER_POST_MESSAGE,
    payload: data,
  });
};
