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

friendSchema.statics.createRequest = async function (
  _idRequest,
  _idReceiver,
  cb
) {
  var friends = this;
  // friends.find(
  //   { admin: `${mongoose.Types.ObjectId(_idReceiver)}` },
  //   function (err, friend) {
  //     if (err) return err;
  //     if (friend == []) {
  //       return cb(null, (createSuccess = false));
  //     }
  //     // friend.request.push(_idRequest);
  //     console.log("request", friend);
  //     // friend
  //     //   .save()
  //     //   .then()
  //     //   .catch((err) => console.log("can not save request friend"));
  //   }
  // );
  const friendReceiver = await friends.find({
    admin: `${mongoose.Types.ObjectId(_idReceiver)}`,
  });
  if (friendReceiver) {
    console.log("friend receiver", friendReceiver);
  } else {
    console.log("No Friend receiver");
  }
  // friends.find(
  //   { admin: `${mongoose.Types.ObjectId(_idRequest)}` },
  //   function (err, friend) {
  //     if (err) return err;
  //     // friend.waiting.concat(_idReceiver);
  //     // friend
  //     //   .save()
  //     //   .then()
  //     //   .catch((err) => console.log("can not save waiting friend"));
  //   }
  // );
  // let createSuccess = true;
  const friendRequest = await friends.find({
    admin: `${mongoose.Types.ObjectId(_idRequest)}`,
  });
  if (friendRequest) {
    console.log("Friend Request", friendRequest);
  } else {
    console.log("No friend request");
  }
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
