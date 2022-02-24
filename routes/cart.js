const router = require("express").Router();

router.get("/cart", (req, res) => {
  res.render("cart");
});

module.exports = router;
