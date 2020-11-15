const express = require("express");
const router = express.Router();
const { Users } = require("../../../../modal/userSchema");

router.post("/", auth, (req, res) => {
  let _idRequest = req.user._id;
  let _idReceiver = req.body._id;
});

module.exports = router;
