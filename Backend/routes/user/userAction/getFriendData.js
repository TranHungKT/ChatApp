const express = require("express");
const router = express.Router();
const { User } = require("../../../modal/userSchema");
const { auth } = require("../../../middleware/auth");
router.post("/", auth, async (req, res) => {
  const { _idFriend } = req.body;

  try {
    const friendData = await User.findOne({ _id: _idFriend });

    return res.status(200).json({
      userName: friendData.userName,
      image: friendData.image,
      gallery: friendData.gallery,
    });
  } catch (err) {
    console.log("get friend error", err);
  }
});

module.exports = router;
