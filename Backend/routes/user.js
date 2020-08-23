const express = require("express");
const router = express.Router();

router.use("/auth", require("./user/auth"));
router.use("/action", require("./user/userAction"));
module.exports = router;
