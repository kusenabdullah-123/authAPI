const promise = require("../promise");
module.exports = {
  getUsers: ({ user, pass }) => {
    return promise("SELECT ??,??,?? FROM ?? WHERE ??=? AND ??=?", [
      "nama",
      "username",
      "password",
      "users",
      "username",
      user,
      "password",
      pass,
    ]);
  },
};
