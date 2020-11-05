const io = require("../index").io;

const { Rooms } = require("../modal/roomSchema");
const { ChatInRoom } = require("../modal/chatInRoomSchema");
const { Chats } = require("../modal/chatSchema");
const { formatMessage } = require("../utils/Factories");
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
    // console.log("connected user", connectedUser);
  });
  socket.on(JOIN_ROOM, (roomIds) => {
    // console.log("roomIds", roomIds);
    roomIds.forEach((roomId) => {
      socket.join(roomId);
    });
  });
  socket.on(TYPING, ({ userName, roomId, isTyping }) => {
    socket.to(roomId).emit(TYPING, { userName, isTyping });
  });
  socket.on(MESSAGE_SENT, ({ roomId, userName, message, userId }) => {
    socket.to(roomId).emit(MESSAGE_SENT, { userName, message, userId });
    const saveChat = saveNewChat(userName, message, roomId);
  });
}

/*
  funtion saveNewChat
  @param userName is sender, type is string
  @param message is string
  @param roomId mean to, type _id
*/

async function saveNewChat(userName, message, roomId) {
  let newChat = new Chats();
  newChat.message = message;
  newChat.sender = userName;
  newChat.to = roomId;

  const saveChat = await newChat.save();
  if (saveChat) {
    return updateLastMessage(saveChat._id, roomId);
  }
}

async function updateLastMessage(chatId, roomId) {
  const updateLastMess = await Rooms.findOneAndUpdate(
    { _id: roomId },
    { lastMessageId: chatId },
    { new: true }
  );
  if (updateLastMess) {
    return addToChatInRoom(updateLastMess.chatId, updateLastMess.lastMessageId);
  }
}

async function addToChatInRoom(chatId, lastMessageId) {
  const addToChatInRoom = await ChatInRoom.findOneAndUpdate(
    { _id: chatId },
    {
      $push: {
        chats: lastMessageId,
      },
    },
    { new: true }
  );
  if (addToChatInRoom) {
    return;
  } else {
    console.log("Cant add chat");
  }
}

function addUserConnected(userId) {
  connectedUser.push(userId);
  return connectedUser;
}

module.exports = socketManager;
