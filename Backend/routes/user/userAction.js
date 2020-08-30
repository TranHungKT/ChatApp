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

router.use(
  "/createRoom",
  (req, res, next) => {
    if (req.method !== "POST") {
      return res.status(400).json({ message: "Method is not allowed" });
    }
    next();
  },
  require("./userAction/room/createRoom")
);

router.use(
  "/getRoom",
  (req, res, next) => {
    if (req.method !== "GET") {
      return res.status(400).json({ message: "Method is not allowed" });
    }
    next();
  },
  require("./userAction/room/getRoom")
);

module.exports = router;
