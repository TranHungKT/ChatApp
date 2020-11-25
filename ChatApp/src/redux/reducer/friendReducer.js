import {GET_FRIENDS} from '../type';

const initalState = {
  friends: [],
};

export default function (state = initalState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: payload,
      };
    default:
      return state;
  }
}
