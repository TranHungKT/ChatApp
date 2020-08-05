const express = require("express");
const router = express.Router();

router.use(
  "/login",
  (req, res, next) => {
    if (req.method != "POST") {
      return res.status(400).json({ message: "Requested not allowed" });
    }
    next();
  },
  require("./authAction/login")
);

module.exports = router;
