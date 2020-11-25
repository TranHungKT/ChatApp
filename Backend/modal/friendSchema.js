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
  //Save friend you are request and wait for confirm
  // const friendRequest = await friends.findOneAndUpdate(
  //   {
  //     admin: `${mongoose.Types.ObjectId(_idRequest)}`,
  //   },
  //   {
  //     $push: { request: _idReceiver },
  //   }
  // );
  const friendWaiting = await friends.findOne({
    admin: `${mongoose.Types.ObjectId(_idReceiver)}`,
  });
  if (checkId(_idRequest, friendWaiting.waiting)) {
    err = "You requested for this friend before";
    return cb(err, null);
  }

  friendWaiting.waiting.push(_idRequest);
  friendWaiting.save();
  const friendRequest = await friends.findOne({
    admin: `${mongoose.Types.ObjectId(_idRequest)}`,
  });

  if (checkId(_idReceiver, friendRequest.request)) {
    err = "You are waiting for this friend";
    return cb(err, null);
  }
  friendRequest.request.push(_idReceiver);
  friendRequest.save();

  if (!friendRequest) {
    let err = "Can not save";
    return cb(err, null);
  }

  console.log(friendList);

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

function checkId(id, list) {
  if (!list.includes(id)) {
    return false;
  }
  return true;
}
const Friends = mongoose.model("Friends", friendSchema);
module.exports = { Friends };
