const express = require("express");
const router = express.Router();

router.use(
  "/createTransfer",
  (req, res, next) => {
    if (req.method != "POST") {
      return res.status(400).json({ message: "Get login is not allowed" });
    }
    next();
  },
  require("./transfer/transfer")
);

router.use(
  "/getTransfer",
  (req, res, next) => {
    if (req.method != "GET") {
      return res.status(400).json({ message: "Method is not allowed" });
    }
    next();
  },
  require("./transfer/getTransferData")
);

module.exports = router;
