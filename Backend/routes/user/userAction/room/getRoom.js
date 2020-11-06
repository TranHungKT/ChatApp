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

router.post("/chatArray", async (req, res) => {
  let chatArray = await Rooms.find({
    _id: req.body.roomId,
  })
    .populate("chatArray")
    .select("chatArray")
    .exec();
  if (chatArray) {
    return res.status(200).json(chatArray);
  } else {
    console.error("Cant find chat array");
  }
});
module.exports = router;
