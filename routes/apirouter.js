const express = require("express");
const router = express.Router();

router.get("/d", (req, res) => {
  res.send("api router");
});
router.get("/", (req, res, next) => {
  res.send("hello word");
});

router.post("/data", (req, res) => {
  let data = req.body;

  res.status(200).json({
    status: 1,
    statusCode: 200,
    data: data,
    message: "success",
  });
});

module.exports = router;
