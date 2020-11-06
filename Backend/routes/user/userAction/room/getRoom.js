const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const { Chats } = require("../../../../modal/chatSchema");
// const { User } = require("../../../../modal/userSchema");
const { Rooms } = require("../../../../modal/roomSchema");
const { auth } = require("../../../../middleware/auth");

router.get("/", auth, (req, res) => {
  let _idRequest = req.user._id; // After auth we have req.user;

  Rooms.find({ friendsInRoom: mongoose.Types.ObjectId(_idRequest) })
    .populate("lastMessageId")
    .populate("friendsInRoom")
    // .select("-chatArray")
    .exec()
    .then((room) => {
      if (!room) {
        return res.send("There is no room for you");
      }
      console.log(room);
      return res.send(room);
    })
    .catch((err) => console.log(err));
});

router.get("/chatArray", auth, async (req, res) => {
  let _idRequest = req.user._id;
  let chatArray = await Rooms.find({
    _id: req.body._id,
  })
    .populate("chatArray")
    .select("chatArray")

    .exec();
  return res.send(chatArray);
});
module.exports = router;
