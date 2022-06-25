const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/apistest", controller.apisdata);
module.exports = router;
