import {LOGIN, LOADING, USER_SERVER, LOAD_DATA} from '../type';

const initialState = {
  userData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
