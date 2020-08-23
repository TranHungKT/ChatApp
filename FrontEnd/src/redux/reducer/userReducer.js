import {LOGIN, LOADING, USER_SERVER, LOAD_DATA} from '../type';

export default function (state = {}, action) {
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
