import {GET_ROOM, CREATE_ROOM, AVATAR_OF_FRIEND} from '../type';

const initialState = {
  room: [],
  yourFriend: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case CREATE_ROOM:
      return {
        ...state,
        room: [...room, action.payload],
      };
    case AVATAR_OF_FRIEND:
      const {roomId, userId} = action.payload;
      let tempRoom = state.room;
      let tempFriendArray = tempRoom.find((elenment) => elenment._id == roomId);
      let friendArray = tempFriendArray.friendsInRoom;
      let yourFriend = friendArray.find((element) => element._id !== userId);
      return {
        ...state,
        yourFriend: yourFriend,
      };
    default:
      return state;
  }
}
