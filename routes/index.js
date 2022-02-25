const router = require('express').Router();
const { Card } = require('../db/models');
const { checkProtection } = require('../middlewares/allMiddleware');

router.get('/', (req, res) => {
  res.render('index');
});

router.get("/users/profile/:id/new", checkProtection, (req, res) => {
  res.render("create");
});

router.post("/newImg", async (req, res) => {
  const { title, price, image, condition_id } = req.body;
  const user_id = req.session.userId;
  let result = await Card.create({ title, price, image, condition_id: +condition_id, user_id })
});


router.get("/test", async (req, res) => {
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
