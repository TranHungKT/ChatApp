mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatInRoomSchema = mongoose.Schema({
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chats",
    },
  ],
});

const ChatInRoom = mongoose.model("ChatInRoom", chatInRoomSchema);
module.exports = { ChatInRoom };
