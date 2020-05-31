const conn = require("./conn");
module.exports = (sql, data) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, data, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
