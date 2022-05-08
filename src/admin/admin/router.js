const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/insideadmin", (req, res) => {
  console.log("-----hereeeeeeeeeeeeeeeeeeeeeeee");
  res.send("...............inside admin data");
});

router.get("/testingrout", controller.testing);

module.exports = router;
