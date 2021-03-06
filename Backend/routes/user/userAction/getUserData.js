const express = require("express");
const router = express.Router();
const { User } = require("../../../modal/userSchema");
const { auth } = require("../../../middleware/auth");
router.get("/", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    userName: req.user.userName,
    role: req.user.role,
    image: req.user.image,
    gallery: req.user.gallery,
  });
});

module.exports = router;
