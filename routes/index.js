const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("hello word");
});

router.post("/data", (req, res) => {
  // console.log(req.body, "'--------------------hereeeeeeeeeee");
  let data = req.body;
  console.log(res.socket);

  res.status(200).json({
    data: data,
  });
  //   res.status(200).json({
  //     status: 1,
  //     statusCode: 200,
  //     data: data,
  //     message: "success",
  //   });
});

module.exports = router;
