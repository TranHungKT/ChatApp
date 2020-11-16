const express = require("express");
const router = express.Router();
const { Chats } = require("../../../../modal/chatSchema");
const { User } = require("../../../../modal/userSchema");
const { Rooms } = require("../../../../modal/roomSchema");
const { ChatInRoom } = require("../../../../modal/chatInRoomSchema");
const { auth } = require("../../../../middleware/auth");
var mongoose = require("mongoose");
router.post("/", auth, (req, res) => {
  let _idRequest = req.user._id; // After auth we have req.user;
  let _idReceiver = req.body._id;
  let senderName = req.user.userName;
  User.findOne({ _id: _idReceiver })
    .then((user) => {
      if (!user)
        return res.status(400).send({ message: "Can not find your friend" });
      Rooms.find({
        $and: [
          { friendsInRoom: `${mongoose.Types.ObjectId(_idRequest)}` },
          { friendsInRoom: `${mongoose.Types.ObjectId(_idReceiver)}` },
        ],
      })
        .then((room) => {
          if (room.length == 0) {
            let tempRoom = new Rooms({
              friendsInRoom: [{ _id: _idRequest }, { _id: _idReceiver }],
              name: user.userName + " & " + senderName,
            });
            tempRoom.image = user.image;

            tempRoom
              .save()
              .then((doc) => {
                res.send(doc);
              })
              .catch((err) => console.log(err));
          } else {
            res.status(400).send({ message: "This room was created" });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
