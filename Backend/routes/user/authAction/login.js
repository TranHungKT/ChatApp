const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../../../modal/userSchema");
const accessTokenSecret = process.env.accessTokenSecret;
const bcrypt = require("bcryptjs");
router.post("/", (req, res) => {
  const { email, password } = req.body;

  fail = false;
  errors = "";

  //   if (!username || !email || !password || !confirmPassword || !phoneNumber || !sex) {
  //     fail = true;
  //     errors = "Please fill all fields";
  //     return res.status(400).send(errors);
  //   }

  //   if (password !== confirmPassword) {
  //     fail = true;
  //     errors = "Passwords do not match";
  //     return res.status(400).send(errors);
  //   }

  // if(checkPassword(password) == false){
  //     fail = true;
  //     errors = "Wrong password";
  //     return res.status(400).send(errors);
  // }

  if (fail == false) {
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          fail = true;
          errors = "Your email is registered";
          return res.status(400).send(errors);
        } else {
          const newUser = new User({
            email: email,
            password: password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(() => {})
                .catch((err) => console.log(err));
            });
          });
          return res.json({
            token: jwt.sign(
              {
                email: email,
                password: password,
              },
              accessTokenSecret
            ),
          });
        }
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
