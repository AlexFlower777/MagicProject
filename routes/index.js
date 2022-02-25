const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  const allCards = await Card.findAll({ raw: true });
  console.log(allCards);
  res.render('index', { allCards });
});

router.get('/users/profile/:id/new', (req, res) => {
  res.render('create');
});
router.post('/newImg', async (req, res) => {
  const {
    title, price, image, condition,
  } = req.body;
  // const condition = await Condition.create({ condition: city });
  const user_id = req.session.userId;
  const result = await Card.create({
    title, price, image, condition_id: +condition, user_id,
  });
  res.render('profile', { title, price, image, condition })
});

router.post('/newImg', async (req, res) => {
  console.log(req.body);
});

module.exports = router;
