const express = require("express");
const router = express.Router();
const { Transfer } = require("../../../modal/transferSchema");
const { auth } = require("../../../middleware/auth");

const sentMoney = async (from, to, amount, description) => {
  try {
    const userSent = await Transfer.findOne({ admin: from });

    userSent.balance -= amount;
    userSent.sent.push({
      receiver: to,
      amount: amount,
      description: description,
    });
    userSent.save();

    const userReceive = await Transfer.findOne({ admin: to });
    userReceive.balance += amount;
    userReceive.receive.push({
      sender: from,
      amount: amount,
      description: description,
    });
  } catch (err) {
    console.log("can not transfer", err);
  }
};

router.post("/", auth, async (req, res) => {
  const userId = req.user._id; // from
  const { toFriend, amount, description } = req.body;
  sentMoney(userId, toFriend, amount, description);

  return res.status(200).send("success");
});

module.exports = router;
