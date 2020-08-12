const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../../../modal/userSchema");
const accessTokenSecret = process.env.accessTokenSecret;
const bcrypt = require("bcryptjs");
const { validateLogin } = require("../../../utils/validator");
router.post("/", (req, res) => {
  const { email, password } = req.body;
  const tempUser = {
    email,
    password,
  };

  const { errors, valid } = validateLogin(tempUser);
  if (!valid) return res.status(400).json(errors);

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ message: "Your email is not registered" });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) return res.status(400).json({ err });
        if (!isMatch) {
          return res.status(401).json({ message: "Password is not match" });
        }
        let token = jwt.sign(
          { email: email, password: password },
          accessTokenSecret
        );
        return res.status(200).json({ token });
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
