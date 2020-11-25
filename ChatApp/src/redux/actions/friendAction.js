import {GET_FRIENDS} from '../type';
import {Config} from '@common';

export const getFriend = (cookie) => async (dispatch) => {
  //   fetch(`${Config.server}user/action/getFriend`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       cookie: cookie,
  //     },
  //   }).then((res) =>
  //     res.json().then((data) => {
  //       console.log('data', data);
  //       return dispatch({
  //         type: GET_FRIENDS,
  //         payload: data,
  //       });
  //     }),
  //   );

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
  //   )
  //   const res = (await friends).json();
  //   console.log('res', res);
};
