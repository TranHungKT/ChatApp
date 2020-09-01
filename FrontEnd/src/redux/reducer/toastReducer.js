import {ADD_TOAST, REMOVE_TOAST} from '../type';

const initialState = {
  list: [],
};

export default function (state = initialState, action) {
  switch (action) {
    case ADD_TOAST:
      return {
        ...state,
        list: list.some((toast) => toast.msg === payload.msg)
          ? list
          : [payload, ...list],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        list: list.filter((msg) => msg.key !== payload.key),
      };
    default: {
      return state;
    }
  }
}
