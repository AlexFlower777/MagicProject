const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.render("cart");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
