const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const moment = require("moment");
const accessTokenSecret = process.env.accessTokenSecret;
const emailTransporter = process.env.emailTransporter;
emailTransporterPassword = process.env.emailTransporterPassword;

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    maxlength: 50,
  },
  fullName: {
    type: String,
    unique: 1,
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
  role: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80",
  },
  gallery: [
    {
      require: true,
      type: String,
    },
  ],
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  accout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transfer",
  },
});

userSchema.index({ userName: "text" });

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
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return err;
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), accessTokenSecret);
  var oneHour = moment().add(1, "hour").valueOf();
  user.tokenExp = oneHour;
  user.token = token;

  user
    .save()
    .then(() => cb(null, user))
    .catch((err) => cb(err));
};

userSchema.methods.sendEmail = function (mailReceive, cb) {
  var user = this;
  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${emailTransporter}`,
      pass: `${emailTransporterPassword}`,
    },
  });

  user.token = Math.floor(100000 + Math.random() * 900000);

  const mailOptions = {
    from: `${emailTransporter}`,
    to: `${mailReceive}`,
    subject: "Login chat app",
    text: `Your code is ${user.token}`,
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

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, accessTokenSecret, function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.statics.findById = function (_id, cb) {
  var user = this;

  user.findOne({ _id: _id }, function (err, user) {
    if (err) return cb(err);
    return cb(null, user);
  });
};
const User = mongoose.model("User", userSchema);

module.exports = { User };
