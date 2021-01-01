const express = require("express");
const router = express.Router();
const { auth } = require("../../../middleware/auth");

const { User } = require("../../../modal/userSchema");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/Image");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var uploadImage = multer({ storage: storage }).single("file");
var uploadGallery = multer({ storage: storage }).single("file");

router.post("/", auth, (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.log("err", err);
      return res.json({ success: false, err });
    }

    return res.send({ success: true, url: res.req.file.path });
  });
});

router.post("/gallery", auth, (req, res) => {
  const userId = req.user._id;
  console.log("userId", userId);
  uploadGallery(req, res, async (err) => {
    if (err) {
      console.log("err", err);
      return res.json({ success: false, err });
    }

    try {
      const user = await User.findOne({ _id: userId });
      user.gallery.push(res.req.file.path);
      user.save();

      return res.send({ success: true, url: res.req.file.path });
    } catch (err) {
      console.log(err);
    }
  });
});
module.exports = router;
