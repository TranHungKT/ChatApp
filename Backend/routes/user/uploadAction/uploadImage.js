const express = require("express");
const router = express.Router();
const { auth } = require("../../../middleware/auth");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/", auth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log("err", err);
      return res.json({ success: false, err });
    }

    return res.send({ success: true, url: res.req.file.path });
  });
});

module.exports = router;
