import {INIT_SOCKET} from '../type';

export const initSocket = (socket) => (dispatch) => {
  return dispatch({
    type: INIT_SOCKET,
    payload: socket,
  });
};
