const io = require("../index").io;

const { Rooms } = require("../modal/roomSchema");
const { ChatInRoom } = require("../modal/chatInRoomSchema");
const { Chats } = require("../modal/chatSchema");

const {
  USER_CONNECTED,
  MESSAGE_RECIEVED,
  MESSAGE_SENT,
  USER_DISCONNECTED,
  TYPING,
  VERIFY_USER,
  LOGOUT,
  JOIN_ROOM,
} = require("./Event");

let connectedUser = [];

function socketManager(socket) {
  socket.on(USER_CONNECTED, (userId) => {
    connectedUser = addUserConnected(userId);
    console.log("connected user", connectedUser);
  });
  socket.on(JOIN_ROOM, (roomIds) => {
    roomIds.forEach((roomId) => {
      socket.join(roomId);
      console.log("join room");
    });
  });
}

function addUserConnected(userId) {
  connectedUser.push(userId);
  return connectedUser;
}

module.exports = socketManager;
