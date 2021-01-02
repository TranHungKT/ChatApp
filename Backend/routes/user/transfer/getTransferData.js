const express = require("express");
const router = express.Router();
const { Transfer } = require("../../../modal/transferSchema");
const { auth } = require("../../../middleware/auth");

router.get("/", auth, async (req, res) => {
  const userId = req.user._id;
  try {
    const transfer = await Transfer.findOne({ admin: userId })
      .populate("admin", "userName image")
      .populate("sent.receiver", "image userName")
      .populate("receive.sender", "image userName")
      .exec();
    return res.status(200).send(transfer);
  } catch (err) {
    console.log("get transfer err", err);
  }
});

module.exports = router;
