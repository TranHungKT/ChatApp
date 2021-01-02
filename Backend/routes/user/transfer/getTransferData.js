const express = require("express");
const router = express.Router();
const { Transfer } = require("../../../modal/transferSchema");
const { auth } = require("../../../middleware/auth");

router.get("/", auth, async (req, res) => {
  const userId = req.user._id;
  const transfer = await Transfer.findOne({ admin: userId });
  return res.status(200).send(transfer);
});

module.exports = router;
