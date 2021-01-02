const express = require("express");
const router = express.Router();

const { Friends } = require("../../../../modal/friendSchema");
router.post("/", (req, res) => {
  // let _idRequest = req.user._id;
  const _idReceiver = req.body._id;
  Friends.createRequest(_idRequest, _idReceiver, (err, createSuccess) => {
    if (err) return;
    if (createSuccess) {
      return res.status(200).send("Send request success");
    }
  });
});

module.exports = router;
