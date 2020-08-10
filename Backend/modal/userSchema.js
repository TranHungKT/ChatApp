const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const accessTokenSecret = process.env.accessTokenSecret;
const emailTransporter = process.env.emailTransporter;
emailTransporterPassword = process.env.emailTransporterPassword;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.comparePassword(plainPassword, this.password, function (err, isMatch) {
    if (err) return err;
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), accessTokenSecret);

  user.token = token;

  user
    .save()
    .then(() => cb(null, user))
    .catch((err) => cb(err));
};

userSchema.methods.sendEmail = function (mailReceive, cb) {
  var user = this;
  let transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${emailTransporter}`,
      pass: `${emailTransporterPassword}`,
    },
  });

  user.token = Math.floor(100000 + Math.random() * 900000);

  let mailOptions = {
    from: `${emailTransporter}`,
    to: `${mailReceive}`,
    subject: "Login chat app",
    text: `Your register code is ${user.token}`,
  };
  transpoter.sendMail(mailOptions, function (err, isSend) {
    if (err) return cb(err);
    user
      .save()
      .then(() => {
        cb(null, isSend);
      })
      .catch((err) => console.log(err));
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
