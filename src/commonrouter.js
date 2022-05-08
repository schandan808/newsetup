const express = require("express");
const router = express.Router();
const admin = require("../src/admin/router");

router.use("/", admin);

module.exports = router;
