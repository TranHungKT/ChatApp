const express = require("express");
const router = express.Router();
const { User } = require("../../../modal/userSchema");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const { codeValidate, validateLogin } = require("../../../utils/validator");

router.post("/getCode", (req, res) => {
  const { email } = req.body;

  User.findOne({ email: email }).then((doc) => {
    doc.sendEmail(email, (err, isSend) => {
      if (!isSend) {
        return res.status(401).json({ message: "Cant send" });
      }
      setTimeout(() => {
        user.updateOne({ token: undefined }, function (err, doc) {
          if (err) return res.json({ err });
        });
      }, 60000);
      return res.status(200).json({ message: `${doc.token}` });
    });
  });
});

router.post("/", (req, res) => {
  const { email, code } = req.body;
  // remember to check fill in all fields in front end
  const tempCode = { code };
  const { valid, errors } = codeValidate(tempCode);

  if (!valid) return res.status(400).json(errors);

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

  const user = { password, email };

  const { valid, errors } = validateLogin(user);

  if (!valid) return res.status(400).json(errors);

  User.findOne({ email: email }).then((doc) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return res.status(400).json({ message: "Cant hash" });
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) return res.status(400).json({ message: "Cant hash" });
        doc
          .updateOne({ password: hash })
          .then(() =>
            res.status(200).json({ message: "change password succes" })
          )
          .catch((err) => console.log(err));
      });
    });
  });
});

module.exports = router;
