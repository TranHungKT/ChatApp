const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = mongoose.Schema({
  friendsInRoom: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  name: {
    type: String,
  },
  chatId: {
    type: Schema.Types.ObjectId,
    ref: "ChatInRoom",
    require: false,
  },
  lastMessageId: {
    type: Schema.Types.ObjectId,
    ref: "Chats",
    require: false,
  },
});

const Rooms = mongoose.model("Rooms", roomSchema);
module.exports = { Rooms };
