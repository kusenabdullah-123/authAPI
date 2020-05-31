const { createConnection } = require("mysql2");
const util = require("util");
require("dotenv").config();
const conn = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});
conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected");
});
conn.query = util.promisify(conn.query);

module.exports = conn;
