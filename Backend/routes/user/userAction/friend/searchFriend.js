const express = require("express");
const router = express.Router();
const { User } = require("../../../../modal/userSchema");
const { Friends } = require("../../../../modal/friendSchema");
const { auth } = require("../../../../middleware/auth");
router.post("/", auth, async (req, res) => {
  let { searchString } = req.body;

  let user = await User.find(
    { email: { $regex: searchString } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .select("userName image email")
    .exec();
  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(400).send("Can not find friend");
  }
});

module.exports = router;
