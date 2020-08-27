const express = require("express");
const router = express.Router();

router.use(
  "/auth",
  (req, res, next) => {
    if (req.method == "DELETE" || req.method == "PUT") {
      return res.status(400).json({ message: "Method is not allowed" });
    }
    next();
  },
  require("./userAction/getUserData")
);

router.use(
  "/getChats",
  (req, res, next) => {
    if (req.method == "DELETE" || req.method == "PUT") {
      return res.status(400).json({ message: "Method is not allowed" });
    }
    next();
  },
  require("./userAction/getUserChats")
);

module.exports = router;
