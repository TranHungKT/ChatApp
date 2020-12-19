const express = require("express");
const router = express.Router();
const { auth } = require("../../../middleware/auth");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// var upload = multer({ storage: storage }).single("file");

function uploadFunc(type, name, uri) {
  const upload = multer({ storage: storage }).single("file");
  return upload;
}

router.post("/", auth, (req, res) => {
  console.log(req.body);
  const { type, name, url } = req.body;
  const upload = uploadFunc(type, name, url);
  upload(req, res, (err) => {
    if (err) {
      console.log("noooo");
      return res.json({ success: false, err });
    }
    console.log("res", res.req);
    console.log("req", req);
    return res.json({ success: true, url: res.req });
  });
});

module.exports = router;
