const router = require("express").Router();
const { getUsers } = require("../model/users/user.service");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUsers({ user: username, pass: password });
    user.length > 0
      ? jwt.sign({ user }, process.env.KEY_SECRET, (err, token) => {
          res.json({
            status: 1,
            token,
          });
        })
      : res.status(200).json({
          status: 1,
          result: "not found",
        });
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
