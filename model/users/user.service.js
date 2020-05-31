const promise = require("../promise");
module.exports = {
  getUsers: promise("SELECT * FROM ??", ["users"]),
};
