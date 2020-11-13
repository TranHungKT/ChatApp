import {act} from 'react-test-renderer';
import {
  GET_ROOM,
  CREATE_ROOM,
  AVATAR_OF_FRIEND,
  UPDATE_LAST_MESSAGE,
} from '../type';
import moment from 'moment';
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
    case UPDATE_LAST_MESSAGE:
      const {sender, message} = action.payload;
      let updateRoom = state.room;
      updateRoom.forEach((room) => {
        if (room._id == action.payload.roomId) {
          room.lastMessageId.message = message;
          room.lastMessageId.createdAt = Date.now();
          room.lastMessageId.sender = sender;
        }
      });
      let tempUpdateRoom = [...updateRoom];
      return {
        ...state,
        room: tempUpdateRoom,
      };
    default:
      return state;
  }
}
