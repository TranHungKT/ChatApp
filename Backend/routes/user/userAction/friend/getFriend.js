const express = require("express");
const router = express.Router();
const { Users } = require("../../../../modal/userSchema");
const { Friends } = require("../../../../modal/friendSchema");
const { auth } = require("../../../../middleware/auth");
router.get("/", auth, async (req, res) => {
  const _idRequest = req.user._id;
  const friends = await Friends.findOne({
    admin: `${mongoose.Types.ObjectId(_idRequest)}`,
  })
    .select("friendList request waiting")
    .populate("friendList", "userName email image")
    .exec();
  if (friends) {
    res.status(200).send(friends);
  } else {
    res.send(400).send("We can not find your friend");
  }
});

module.exports = router;
