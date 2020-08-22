const express = require("express");
const router = express.Router();

router.use(
  "/",
  (req, res, next) => {
    if (req.method == "DELETE" || req.method == "PUT") {
      return res.status(400).json({ message: "Method is not allowed" });
    }
    next();
  },
  require("./userAction/getUserData")
);

module.exports = router;
