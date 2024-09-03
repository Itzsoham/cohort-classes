const express = require("express");
const app = express();

let todos = [];
// route headers
app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.listen(3000);
