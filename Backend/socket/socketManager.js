const io = require("../index").io;

const { Rooms } = require("../modal/roomSchema");
const { Friends } = require("../modal/friendSchema");
const { Chats } = require("../modal/chatSchema");
const { formatMessage, formatImage } = require("../utils/Factories");
const {
  USER_CONNECTED,
  MESSAGE_SENT,
  TYPING,
  JOIN_ROOM,
  REQUEST_FRIEND,
  ACCEPT_FRIEND,
  REFUSE_FRIEND,
  CHECK_CONNECTED,
  MESSAGE_SENT_IMAGE,
} = require("./Event");

const connectedUser = [];

/*
  function checkID 
  @param id is ID in list friend
  return true if is online
*/
function checkID(id, array) {
  if (array.includes(id)) {
    return true;
  }
  return false;
}

/*
  funtion saveNewChat
  @param sender is sender, type is string
  @param message is string
  @param roomId mean to, type _id
*/
async function updateLastMessage(chatId, roomId) {
  const updateLastMess = await Rooms.findOneAndUpdate(
    { _id: roomId },
    {
      lastMessageId: chatId,
      $push: {
        chatArray: chatId,
      },
    },
    { new: true }
  );
  if (updateLastMess) {
  } else {
    console.error("Cant update mess");
  }
}

async function saveNewChat(sender, message, roomId) {
  const newChat = new Chats();
  newChat.message = message;
  newChat.sender = sender;
  newChat.to = roomId;

  const saveChat = await newChat.save();
  if (saveChat) {
    return updateLastMessage(saveChat._id, roomId);
  }
}

function addUserConnected(userId) {
  if (checkID(userId, connectedUser)) {
    return;
  }
  connectedUser.push(userId);
  return connectedUser;
}

/*
Main socket goes here
*/

function socketManager(socket) {
  socket.on(USER_CONNECTED, (_id) => {
    addUserConnected(_id);
  });
  socket.on(JOIN_ROOM, (roomIds) => {
    roomIds.forEach((roomId) => {
      socket.join(roomId);
    });
  });
  socket.on(TYPING, ({ sender, roomId, isTyping }) => {
    socket.to(roomId).emit(TYPING, { sender, isTyping });
  });
  socket.on(MESSAGE_SENT, ({ roomId, sender, message, userId }) => {
    const messageSent = formatMessage({ message, sender, userId });

    io.in(roomId).emit(MESSAGE_SENT, { messageSent });
    saveNewChat(sender, message, roomId);
  });
  socket.on(REQUEST_FRIEND, ({ _idRequest, _idReceiver, sender, socketID }) => {
    Friends.createRequest(_idRequest, _idReceiver, (err, createSuccess) => {
      if (err) {
        console.log(err);
        return;
      }
      if (createSuccess) {
        io.to(socketID).emit(REQUEST_FRIEND, { _idRequest, sender });
      }
    });
  });
  socket.on(CHECK_CONNECTED, ({ friendIds, socketID }) => {
    const connectedFriend = [];
    friendIds.map((friendId) => {
      if (!checkID(friendId, connectedUser)) {
        connectedFriend.push(0);
      } else {
        connectedFriend.push(1);
      }
    });
    console.log("connectedFriend", connectedFriend);
    io.to(socketID).emit(CHECK_CONNECTED, connectedFriend);
  });

  socket.on(MESSAGE_SENT_IMAGE, ({ roomId, sender, url, userId }) => {
    console.log("????");
    const imageSent = formatImage({ url, sender, userId });
    io.in(roomId).emit(MESSAGE_SENT_IMAGE, { imageSent });
  });
}

module.exports = socketManager;
