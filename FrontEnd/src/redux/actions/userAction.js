import {LOGIN, LOADING, USER_SERVER, LOAD_DATA} from '../type';

export const login = (email, password) => (dispatch) => {
  //   dispatch({type: LOADING});
  return fetch('http://localhost:3000/user/action/auth', {
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
  return fetch('http://192.168.1.19:3000/user/action/auth', {
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
            console.log(data);
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
