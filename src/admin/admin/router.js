const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/testingrout", controller.testing);

module.exports = router;
