const router = require("express").Router();

router.get('', (req, res) => {
  const { cards } = req.body;
  console.log(cards);
  res.render('cart');
});

module.exports = router;
