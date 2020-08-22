const express = require("express");
const router = express.Router();

router.use(
  "/login",
  (req, res, next) => {
    if (req.method != "POST") {
      return res.status(400).json({ message: "Get login is not allowed" });
    }
    next();
  },
  require("./authAction/login")
);

router.use(
  "/register",
  (req, res, next) => {
    if (req.method != "POST") {
      return res
        .status(400)
        .json({ message: "Get register is not allowed!!!" });
    }
    next();
  },
  require("./authAction/register")
);

router.use(
  "/reset",
  (req, res, next) => {
    if (req.method != "POST") {
      return res.status(400).json({ message: "Get is not allowed!!!" });
    }
    next();
  },
  require("./authAction/reset")
);

router.use("/", (req, res) => {
  res.send("login or register");
});

module.exports = router;
