const express = require("express");
require("dotenv").config();
const app = express();
const users = require("./controllers/users.controllers");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const vertify = (req, res, next) => {
  const { auth } = req.headers;
  if (typeof auth == "undefined") {
    res.status(203);
  }
  req.token = auth;
  next();
};
app.use("/api/login", users);

app.get("/barang", vertify, (req, res) => {
  try {
    const { user } = jwt.verify(req.token, process.env.KEY_SECRET);
    res.end();
  } catch (error) {
    res.status(203).json({
      message: "invalid token",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
