import {LOGIN, LOADING, USER_SERVER, LOAD_DATA} from '../type';
import {Config} from '@common';
export const login = (email, password) => (dispatch) => {
  //   dispatch({type: LOADING});
  return fetch(`${Config.server}user/action/auth`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  }).then((response) => {
    if (response.status == 200) {
      dispatch(getUserData());
    }
  });
};

export const getUserData = (cookie) => (dispatch) => {
  return fetch(`${Config.server}user/action/auth`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'appx2lication/json',
      Cookie: cookie,
    },
  })
    .then((response) => {
      if (response.status == 200) {
        return response
          .json()
          .then((data) => {
            return dispatch({
              type: LOAD_DATA,
              payload: data,
            });
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};
