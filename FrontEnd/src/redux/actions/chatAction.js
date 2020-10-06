import {LOAD_CHAT, LOADING, AFTER_POST_MESSAGE, LOAD_ROOM} from '../type';
import {Config} from '@common';



export const getChats = (cookie) => (dispatch) => {
  // dispatch({type: LOADING})
  return fetch(`${Config.server}user/action/getChats`, {
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
