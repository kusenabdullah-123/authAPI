const router = require("express").Router();
const { getUsers } = require("../model/users/user.service");
router.get("/users", async (req, res) => {
  try {
    const data = await getUsers({ user: "kusen", pass: "kusen" });
    res.status(200).json({
      status: 1,
      result: data[0],
    });
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
