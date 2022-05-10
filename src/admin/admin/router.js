const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/testingrout", controller.testing);







router.post("/signup",controller.signupUser)

module.exports = router;
