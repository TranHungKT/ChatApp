const express = require("express");
const router = express.Router();
const { Chat } = require("../../../modal/chatSchema");
const { auth } = require("../../../middleware/auth");
router.get("/", auth, (req, res) => {
  Chat.find()
    .populate("sender")
    .exec()
    .then((chats) => {
      res.status(200).send(chats);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
