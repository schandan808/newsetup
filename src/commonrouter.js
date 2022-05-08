const express = require("express");
const router = express.Router();
const admin = require("./admin");
const api = require("./api");

router.use("/", admin);
router.use("/api", api);
module.exports = router;
