const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = mongoose.Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    //List user request me to become their friend
    request: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Users",
        },
      ],
    },
    //List user we are waiting to become friend
    waiting: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Users",
        },
      ],
    },
    friendList: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Users",
        },
      ],
    },
  },
  { timestamps: true }
);

friendSchema.statics.createRequest = async function (
  _idRequest,
  _idReceiver,
  cb
) {
  var friends = this;
  //Save friend are waiting yourself to confirm
  const friendReceiver = await friends.findOneAndUpdate(
    {
      admin: `${mongoose.Types.ObjectId(_idReceiver)}`,
    },
    {
      $push: { waiting: _idRequest },
    }
  );
  if (!friendReceiver) {
    let err = "Can not";
    return cb(err, null);
  }
  console.log(friendReceiver);
  console.log("request", _idRequest);
  //Save friend you are request and wait for confirm
  const friendRequest = await friends.findOneAndUpdate(
    {
      admin: `${mongoose.Types.ObjectId(_idRequest)}`,
    },
    {
      $push: { request: _idReceiver },
    }
  );
  if (!friendRequest) {
    let err = "Can not";
    return cb(err, null);
  }
  console.log(friendRequest);
  return cb(null, (createSuccess = true));
};

friendSchema.methods.initialFriendList = function (_idAdmin) {
  var friend = this;
  friend.admin = mongoose.Types.ObjectId(_idAdmin);
  friend.request = [];
  friend.waiting = [];
  friend.friendList = [];
  friend
    .save()
    .then(() => {})
    .catch(() => console.log("Can not save init friend"));
};

const Friends = mongoose.model("Friends", friendSchema);
module.exports = { Friends };
