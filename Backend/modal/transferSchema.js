const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transferSchema = mongoose.Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  sent: [
    {
      receiver: { type: Schema.Types.ObjectId, ref: "User" },
      amount: { type: Number },
      description: { type: String },
    },
  ],
  receive: [
    {
      sender: { type: Schema.Types.ObjectId, ref: "User" },
      amount: { type: Number },
      description: { type: String },
    },
  ],
  balance: {
    type: Number,
    default: 0,
  },
});

const Transfer = mongoose.model("Transfer", transferSchema);
module.exports = { Transfer };
