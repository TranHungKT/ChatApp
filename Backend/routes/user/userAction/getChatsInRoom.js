const express = require("express");
const router = express.Router();
const { Chats } = require("../../../modal/chatSchema");
const { ChatInRoom } = require("../../../modal/chatInRoomSchema");

const { auth } = require("../../../middleware/auth");
router.post("/", async (req, res) => {
  const { chatId } = req.body;
  console.log("chatId", chatId);
  const chatRoom = await ChatInRoom.find({ _id: chatId });

  console.log(chatRoom);
  if (!chatRoom) {
    console.error("Cant find that room");
  } else {
    res.status(200).send(chatRoom);
  }
});

module.exports = router;
