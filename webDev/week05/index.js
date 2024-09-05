const express = require("express");

const app = express();

app.get("/sum", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const c = a + b;

  res.json({
    c,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a - b,
  });
});

app.listen(3000);
