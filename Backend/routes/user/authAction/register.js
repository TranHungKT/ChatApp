const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../../../modal/userSchema");
const accessTokenSecret = process.env.accessTokenSecret;
const bcrypt = require("bcryptjs");
router.post("/", (req, res) => {
  const user = new User(req.body);

  var errors = "";
  User.findOne({ email: user.email }).then((doc) => {
    // if (doc) {
    //   errors = "Your email is registerd";
    //   return res.status(400).json(errors);
    // } else {
    user.sendEmail(user.email, (err, isSend) => {
      if (!isSend) {
        return res.json({ loginSuccess: false, message: "Can't sends" });
      } else {
        return res.json({ loginSuccess: false, message: "sent success" });
      }
    });
    user
      .save()
      .then(() =>
        res.status(200).json({
          loginSuccess: true,
        })
      )
      .catch((err) => console.log(err));
    // }
  });
});

module.exports = router;
