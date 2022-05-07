const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("hello word");
});

router.post("/data", (req, res) => {
  console.log(req.body, "'--------------------hereeeeeeeeeee");
});

module.exports = router;
