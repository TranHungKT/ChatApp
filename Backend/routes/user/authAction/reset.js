const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../../../modal/userSchema");
const accessTokenSecret = process.env.accessTokenSecret;
const bcrypt = require("bcryptjs");

router.post("/getCode", (req, res) => {
  const { email } = req.body;

  User.findOne({ email: email }).then((doc) => {
    doc.sendEmail(email, (err, isSend) => {
      if (!isSend) {
        return res.status(401).json({ message: "Cant send" });
      }
      g;
      return res.status(200).json({ message: `${doc.token}` });
    });
  });
});

router.post("/", (req, res) => {
  const { email, code } = req.body;
  // remember to check fill in all fields in front end
  User.findOne({ email: email }).then((doc) => {
    if (doc.token == code) {
      return res.status(200).json({ message: "Right code" });
    }
    return res.status(401).json({ message: "Ront code" });
  });
});

router.post("/resetPassword", (req, res) => {
  const { password, email } = req.body;
  // Remember to check password and confirm password in front end
  User.findOne({ email: email }).then((doc) => {
    doc
      .updateOne({ password: password })
      .then(() => res.status(200).json({ message: "Reset password success" }))
      .catch((err) => console.log(err));
  });
});

module.exports = router;
