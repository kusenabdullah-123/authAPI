const express = require("express");
require("dotenv").config();
const app = express();
const users = require("./model/users/users.controllers");
app.use(users);
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
