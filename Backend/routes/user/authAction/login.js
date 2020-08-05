const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  return res.send("OK");
});

module.exports = router;
