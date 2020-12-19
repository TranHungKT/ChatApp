const express = require("express");
const router = express.Router();

router.use(
  "/image",
  (req, res, next) => {
    if (req.method != "POST") {
      return res.status(400).json({ message: "Get login is not allowed" });
    }
    next();
  },
  require("./uploadAction/uploadImage")
);

module.exports = router;
