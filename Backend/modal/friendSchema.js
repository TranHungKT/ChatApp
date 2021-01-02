const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = mongoose.Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  //List user request me to become their friend
  request: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  //List user we are waiting to become friend
  waiting: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  friendList: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
});

function checkId(id, list) {
  if (!list.includes(id)) {
    return false;
  }
  return true;
}

friendSchema.statics.createRequest = async function (
  _idRequest,
  _idFriend,
  cb
) {
  var friends = this;

  const friendRequest = await friends
    .findOne({
      admin: `${mongoose.Types.ObjectId(_idFriend)}`,
    })
    .select("request")
    .exec();

  if (!friendRequest) {
    const err = "Can not find this friend";
    return cb(err, null);
  }

  if (checkId(_idRequest, friendRequest.request)) {
    err = "You requested for this friend before";
    return cb(err, null);
  }

  friendRequest.request.push(_idRequest);
  friendRequest.save();
  const friendWaiting = await friends
    .findOne({
      admin: `${mongoose.Types.ObjectId(_idRequest)}`,
    })
    .select("waiting")
    .exec();

  friendWaiting.waiting.push(_idFriend);
  friendWaiting.save();

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
