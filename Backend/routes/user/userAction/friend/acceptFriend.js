const express = require("express");
const router = express.Router();

const { Friends } = require("../../../../modal/friendSchema");
const { auth } = require("../../../../middleware/auth");

const removeInIdRequest = async (_idRequest, _idFriend) => {
  const myFriend = await Friends.findOne({ admin: _idRequest });
  const index = myFriend.request.indexOf(_idFriend);

  myFriend.request.splice(index, 1);
  myFriend.friendList.push(_idFriend);
  myFriend.save();
  console.log({ myFriend });
  return;
};

const removeInIdFriend = async (_idRequest, _idFriend) => {
  const response = await Friends.findOne({ admin: _idFriend });

  const index = response.waiting.indexOf(_idRequest);

  response.waiting.splice(index, 1);
  response.friendList.push(_idRequest);
  response.save();
  console.log(response);
  return;
};

router.post("/", auth, async (req, res) => {
  const _idRequest = req.user._id;
  const { _idFriend } = req.body;

  removeInIdRequest(_idRequest, _idFriend);
  removeInIdFriend(_idRequest, _idFriend);

  return res.status(200).send("success");
});

module.exports = router;
