const { Rooms } = require("../modal/roomSchema");
const { ChatInRoom } = require("../modal/chatInRoomSchema");
const { Chats } = require("../modal/chatSchema");
const io = require("../index").io;
class socketHandler {
  constructor() {
    this.socket = null;
    this.id = null;
    this.publicKey = null;
  }

  joinRoom = async (socket, rooms) => {
    this.socket = socket;
    rooms.forEach((room) => {
      console.log("JOIN_ROOM", room.name);
      this.socket.join(room.name);
    });
  };

  onClientSendMessages = (socket, inputMessage) => {
    this.socket = socket;
    console.log("hello");
    let { chatMessage, _id, to, tempRoom } = inputMessage;
    console.log("send message", tempRoom.name);
    let newChat = new Chats({
      message: chatMessage,
      sender: _id,
      to: to,
    });
    console.log("new chat", newChat);
    // console.log("io", io);
    this.socket.to(tempRoom.name).emit("Output_chat_message", newChat);
    // newChat
    //   .save()
    //   .then((doc) => {

    //   })
    //   .catch((err) => console.log(err));
  };
}

module.exports = socketHandler;
