const io = require("../index").io;

const { Rooms } = require("../modal/roomSchema");
const { Friends } = require("../modal/friendSchema");
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
  REQUEST_FRIEND,
  ACCEPT_FRIEND,
  REFUSE_FRIEND,
} = require("./Event");

let connectedUser = [];

function socketManager(socket) {
  socket.on(USER_CONNECTED, (userId) => {
    connectedUser = addUserConnected(userId);
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
    let messageSent = formatMessage({ message, sender, userId });

    io.in(roomId).emit(MESSAGE_SENT, { messageSent });
    const saveChat = saveNewChat(sender, message, roomId);
  });
  socket.on(REQUEST_FRIEND, ({ _idRequest, _idReceiver, sender }) => {
    Friends.createRequest(_idRequest, _idReceiver, (err, createSuccess) => {
      if (err) return;
      if (createSuccess) {
        io.to(_idReceiver).emit(REQUEST_FRIEND, { sender });
      }
    });
  });
}

/*
  funtion saveNewChat
  @param sender is sender, type is string
  @param message is string
  @param roomId mean to, type _id
*/

async function saveNewChat(sender, message, roomId) {
  let newChat = new Chats();
  newChat.message = message;
  newChat.sender = sender;
  newChat.to = roomId;

  const saveChat = await newChat.save();
  if (saveChat) {
    return updateLastMessage(saveChat._id, roomId);
  }
}

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

// async function addToChatInRoom(chatId, lastMessageId) {
//   const addToChatInRoom = await ChatInRoom.findOneAndUpdate(
//     { _id: chatId },
//     {
//       $push: {
//         chats: lastMessageId,
//       },
//     },
//     { new: true }
//   );
//   const addToChatInRoom = await ChatInRoom.find({ _id: chatId });

//   if (addToChatInRoom) {
//     // addToChatInRoom.chat.push(lastMessageId);
//     // addToChatInRoom[0].chats.push(lastMessageId);
//     console.log(addToChatInRoom[0]);
//   } else {
//     console.log("Cant add chat");
//   }
//   let tempChatInRoom = await ChatInRoom.find({
//     _id: "5fa4bb6169c71c25c590bf90",
//   });
//   // tempChatInRoom.chats.push(lastMessageId.toString());

//   // tempChatInRoom.save().then().catch();
//   console.log(tempChatInRoom);
//   return tempChatInRoom;
// }

function addUserConnected(userId) {
  connectedUser.push(userId);
  return connectedUser;
}

module.exports = socketManager;
