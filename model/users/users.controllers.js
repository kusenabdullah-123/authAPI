const router = require("express").Router();
const { getUsers } = require("./user.service");
router.get("/users", async (req, res) => {
  try {
    const data = await getUsers;
    res.status(200).json({
      status: 1,
      result: data,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
