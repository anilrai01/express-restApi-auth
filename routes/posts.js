const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("You are at post rest api");
});

module.exports = router;
