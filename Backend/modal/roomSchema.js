const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = mongoose.Schema(
  {
    friendsInRoom: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    name: {
      type: String,
    },
    chatInRoom: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chats",
        require: false,
      },
    ],
  },
  { timestamps: true }
);

const Rooms = mongoose.model("Rooms", roomSchema);
module.exports = { Rooms };
