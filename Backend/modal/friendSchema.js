const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = mongoose.Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    //List user request me to become their friend
    request: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    //List user we are waiting to become friend
    waiting: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    friendList: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

friendSchema.statics.createRequest = function (_idRequest, _idReceiver, cb) {
  var friends = this;
  friends.find({ _id: _idReceiver }, function (err, friend) {
    if (err) return err;
    friend.request.concat(_idRequest);
    friend
      .save()
      .then()
      .catch((err) => console.log("can not save request friend"));
  });
  friends.find({ _id: _idReceiver }, function (err, friend) {
    if (err) return err;
    friend.waiting.concat(_idReceiver);
    friend
      .save()
      .then()
      .catch((err) => console.log("can not save waiting friend"));
  });

  return cb(null, createSuccess);
};

const Friends = mongoose.model("Friends", friendSchema);
module.exports = { Friends };
