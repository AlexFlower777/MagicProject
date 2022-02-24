const router = require("express").Router();
const { Card } = require("../db/models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/test", async (req, res) => {
  const allCards = await Card.findAll({ raw: true });
  console.log(allCards);
  res.render("index", { allCards });
});

module.exports = router;
