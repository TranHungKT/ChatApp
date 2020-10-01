import {CREATE_ROOM, GET_ROOM} from '../type';
import {Config} from '@common';
export const getRooms = (cookie) => (dispatch) => {
  return fetch(`${Config.server}user/action/getRoom`, {
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
          type: GET_ROOM,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  });
};

export const createRoom = (cookie, idReceiver) => (dispatch) => {
  return fetch(`${Config.server}user/action/createRoom`, {
    method: 'POST',
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
          type: CREATE_ROOM,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  });
};
