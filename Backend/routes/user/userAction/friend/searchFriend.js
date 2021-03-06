const express = require("express");
const router = express.Router();

const { User } = require("../../../../modal/userSchema");
const { auth } = require("../../../../middleware/auth");

router.post("/", auth, async (req, res) => {
  const { searchString } = req.body;
  //Search theo tên có dấu
  const user = await User.find(
    { userName: { $regex: searchString } },
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
