const express = require("express");
const app = express();
const expresslayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const indexrouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expresslayout);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL, (err) => {
  if (err) {
    console.log("errr");
  } else {
    console.log("connected");
  }
});

app.use("/", indexrouter);

app.listen(process.env.PORT || 3000);