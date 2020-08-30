const express = require("express");
const router = express.Router();
const { Chats } = require("../../../../modal/chatSchema");
const { User } = require("../../../../modal/userSchema");
const { Rooms } = require("../../../../modal/roomSchema");
const { auth } = require("../../../../middleware/auth");

router.post("/", auth, (req, res) => {
  let _idRequest = req.user._id; // After auth we have req.user;
  let _idReceiver = req.body._id;
  User.findOne({ _id: _idReceiver }).then((user) => {
    let rooms = new Rooms({
      friendsInRoom: [{ _id: _idRequest }, { _id: _idReceiver }],
      name: user.name,
    });
    rooms
      .save()
      .then((doc) => {
        res.send(doc);
      })
      .catch((err) => console.log(err));
  });
});

module.exports = router;
