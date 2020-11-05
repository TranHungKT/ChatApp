mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: String,
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chats = mongoose.model("Chats", chatSchema);
module.exports = { Chats };
