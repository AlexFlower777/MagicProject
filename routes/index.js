const router = require('express').Router();
const { Card } = require('../db/models');

router.get("/", async (req, res) => {
  const allCards = await Card.findAll({ raw: true });
  console.log(allCards);
  res.render('index', { allCards });
});

router.get("/new", (req, res) => {
  res.render("create");
});


router.post("/newImg", async (req, res) => {
  console.log(req.body);
  
});

module.exports = router;
