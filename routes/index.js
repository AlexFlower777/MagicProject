const router = require("express").Router();
const { Card } = require("../db/models");

router.get("/", async (req, res) => {
  const allCards = await Card.findAll({ raw: true });
  console.log(allCards);
  res.render("index", { allCards });
});

module.exports = router;
