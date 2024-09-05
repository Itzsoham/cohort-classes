const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.a;
  if (age >= 18) {
    next();
  } else {
    res.json({ msg: "Go home kid" });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({ msg: "You are in ride 1" });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({ msg: "You are in ride 2" });
});

app.listen(3000);
