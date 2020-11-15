const express = require("express");
const router = express.Router();
const { Users } = require("../../../../modal/userSchema");
const { Friends } = require("../../../../modal/friendSchema");
router.get("/", auth, async (req, res) => {
  let _idRequest = req.user._id;
  const friends = await Friends.find({ Admin: _idRequest })
    .select("friendList")
    .exec();
  if (friends) {
    res.status(200).send(friends);
  } else {
    res.send(400).send("We can not find your friend");
  }
});

module.exports = router;
