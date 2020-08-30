const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = mongoose.Schema(
  {
    admin: {
      type: String.Types.ObjectId,
      ref: "User",
    },
    sentRequest: {
      type: String.Types.ObjectId,
      ref: "User",
    },
    request: {
      type: String.Types.ObjectId,
      ref: "User",
    },
    friendList: [
      {
        type: String.Types.ObjectId,
        ref: "User",
      },
    ],
    totalRequest: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Friends = mongoose.model("Friends", friendSchema);
module.exports = { Friends };
