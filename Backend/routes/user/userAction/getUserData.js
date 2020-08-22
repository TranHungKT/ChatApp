const express = require("express");
const router = express.Router();
const { User } = require("../../../modal/userSchema");

router.get("/", (req, res) => {
  res.send("Hellop");
});

module.exports = router;
