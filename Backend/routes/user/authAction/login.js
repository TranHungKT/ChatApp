const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../../../modal/userSchema");
const accessTokenSecret = process.env.accessTokenSecret;
const bcrypt = require("bcryptjs");

module.exports = router;
