const express = require("express");
const cors = require("cors");

const app = express();

function middleware(req, res, next) {
  console.log(`Mathod is ${req.method}`);
  console.log(`Hostname is ${req.hostname}`);
  console.log(`Url is ${req.url}`);
  console.log(new Date());
  next();
}

// app.use(middleware);
app.use(cors());
app.use(express.json());

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});
app.post("/sumPost", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  console.log(req.body);
  res.json({
    ans: a + b,
  });
});

app.listen(3000);
