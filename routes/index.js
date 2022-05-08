const express = require("express");
const router = express.Router();
const apirouter = require("./apirouter");
const adminrouter = require("./routes/adminrouter");

router.use("/", apirouter);
router.use("/", adminrouter);

module.exports = router;
