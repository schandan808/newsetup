const express = require("express");
const app = express();
const expresslayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
var bodyParser = require("body-parser");

const commonsrc = require("./src/commonrouter");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expresslayout);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.log("errr");
  } else {
    // console.log()
    console.log(`connected port ${process.env.PORT}`);
  }
});

app.use("/", commonsrc);
app.listen(process.env.PORT);
