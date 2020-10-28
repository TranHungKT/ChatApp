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
} = require("./Event");

let connectedUser = {};

function socketManager(socket) {
  socket.on(USER_CONNECTED, (userId) => {
    connectedUser = this.addUserConnected(userId);
  });
}

function addUserConnected(userId) {
  connectedUser.push(userId);
  return connectedUser;
}

module.exports = socketManager;
