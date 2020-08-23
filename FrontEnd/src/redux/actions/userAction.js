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

export const getUserData = () => (dispatch) => {
  return fetch('http://localhost:3000/user/action/auth', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      cookie: cookie,
    },
  })
    .then((response) => {
      if (response.status == 200) {
        return dispatch({
          type: LOAD_DATA,
          payload: response.body,
        });
      }
    })
    .catch((err) => console.log(err));
};
