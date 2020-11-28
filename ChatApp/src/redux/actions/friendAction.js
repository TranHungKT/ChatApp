import {GET_FRIENDS} from '../type';
import {Config} from '@common';

export const getFriend = (cookie) => async (dispatch) => {
  const friends = await fetch(`${Config.server}user/action/getFriend`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      cookie: cookie,
    },
  });
  const data = await friends.json();
  console.log('data', data);
  return dispatch({
    type: GET_FRIENDS,
    payload: data,
  });
};
