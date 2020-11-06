mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chats",
  },
});

const chatInRoomSchema = mongoose.Schema({
  chats: [chatSchema],
});

const ChatInRoom = mongoose.model("ChatInRoom", chatInRoomSchema);
module.exports = { ChatInRoom };
