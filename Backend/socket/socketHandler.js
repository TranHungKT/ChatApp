const { Rooms } = require("../modal/roomSchema");
const { ChatInRoom } = require("../modal/chatInRoomSchema");
const { Chats } = require("../modal/chatSchema");

class socketHandler {
  constructor() {}
  onClientSendMessages = async (inputMessage, socket) => {
    let { message, sender, to } = inputMessage;
    let newChat = new Chats({
      message: message,
      sender: sender,
      to: to,
    });

    newChat
      .save()
      .then(() => {
        socket.to(sender).emit("Output_chat_message", {
          message: message,
          sender: sender,
          to: to,
        });
      })
      .catch((err) => console.log(err));
  };
}
