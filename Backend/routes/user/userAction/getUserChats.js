const express = require("express");
const router = express.Router();
const { Chats } = require("../../../modal/chatSchema");
const { auth } = require("../../../middleware/auth");
router.get("/", auth, (req, res) => {
  let _id = req.user._id;
  Chats.find({ sender: _id })
    .then((chats) => {
      res.status(200).send(chats);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
