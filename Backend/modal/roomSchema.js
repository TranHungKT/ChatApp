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
  chatArray: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chats",
      require: true,
      default: "5f47cc6cd7b5001ded9fd7fb",
    },
  ],
  lastMessageId: {
    type: Schema.Types.ObjectId,
    ref: "Chats",
    default: "5f47cc6cd7b5001ded9fd7fb",
  },
  image: {
    type: String,
  },
});

const Rooms = mongoose.model("Rooms", roomSchema);
module.exports = { Rooms };
