const express = require("express");
const cors = require("cors");
const JWT_SECRET = "whyalwaysfuckeduplikekaizen";
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
app.use(cors());
const user = [];

// function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];
//
//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     // use a simple function here
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

app.post("/signing-up", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  user.push({
    username: username,
    password: password,
  });
  res.json({
    massege: "User Signed In",
  });
});

app.post("/signing-in", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = user.find((u) => {
    if (username == u.username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    // foundUser.token = token;

    res.json({
      token: token,
    });
    console.log(user);
  } else {
    res.status(403).send({
      message: "Invalid Password and Username",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      massege: "You are not logged in",
    });
  }
}

// app.get("/me", (req, res) => {
//   const token = req.headers.authorization;
//   const decodedInfo = jwt.verify(token, JWT_SECRET);
//   const username = decodedInfo.username;
//   // const users = user.find((u) => {
//   //   u.token == token;
//   //   return true;
//   // });
//   const users = user.find((user) => user.username === username);

//   if (users) {
//     res.send({
//       username: username,
//     });
//   } else {
//     res.status(401).send({
//       message: "Go Home",
//     });
//   }
// });

app.get("/me", auth, (req, res) => {
  const username = req.username;
  const foundUsers = user.find((user) => user.username === username);

  if (foundUsers) {
    res.send({
      username: foundUsers.username,
      password: foundUsers.password,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});

app.listen(3000);
