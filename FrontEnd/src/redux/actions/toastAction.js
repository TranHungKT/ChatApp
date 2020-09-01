import {ADD_TOAST, REMOVE_TOAST} from '../type';

export const addToast = (msg, key) => (dispatch) => {
  return dispatch({
    type: ADD_TOAST,
    payload: {msg, key},
  });
};

export const removeToast = (key) => (dispatch) => {
  return dispatch({
    type: REMOVE_TOAST,
    payload: {key},
  });
};
