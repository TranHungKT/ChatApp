const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../../../modal/userSchema");
const accessTokenSecret = process.env.accessTokenSecret;
const bcrypt = require("bcryptjs");
router.post("/", (req, res) => {
  const user = new User(req.body);

  var errors = "";
  User.findOne({ email: user.email })
    .then((doc) => {
      if (doc) {
        errors = "Your email is registerd";
        return res.status(400).json(errors);
      } else {
        user.sendEmail(user.email, (err, isSend) => {
          if (!isSend) {
            return res.status(401).json({ message: "Can't sends" });
          } else {
            setTimeout(() => {
              user.updateOne({ token: undefined }, function (err, doc) {
                if (err) return res.json({ err });
              });
            }, 60000);
            return res.status(200).json({ message: `${user.token}` });
          }
        });
      }
    })
    .catch((err) => console.log(err));
});

router.post("/codeConfirm", (req, res) => {
  const { code, email } = req.body;
  User.findOne({ email: email })
    .then((doc) => {
      if (doc.token == code) {
        doc
          .updateOne({ role: 1 })
          .then(() => {
            return res.status(200).json({ message: "Register success" });
          })
          .catch((err) => console.log(err));
      } else {
        return res.status(401).json({ message: "Ron't code" });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;

// "email": "tranhung26122612@gmail.com",
// "code" : "631029"

// "name": "Tran",
// "lastname": "Hung",
// "password": "123456",
// "email": "tranhung26122612@gmail.com",
// "confirmPassword1": "123456"
