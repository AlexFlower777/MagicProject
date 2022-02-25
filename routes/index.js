const router = require('express').Router();
const { Card } = require('../db/models');
const { checkUser, checkProtection } = require('../middlewares/allMiddleware');


router.get('/', async (req, res) => {
  const allCards = await Card.findAll({ raw: true });
  console.log(allCards);
  res.render('index', { allCards });
});

router.get('/users/profile/:id/new', (req, res) => {
  res.render('create');
});
router.post('/newImg', checkProtection, async (req, res) => {
  const {
    title, price, image, condition,
  } = req.body;
  // const condition = await Condition.create({ condition: city });
  const userId = req.session.userId;
  const result = await Card.create({
    title, price, image, condition_id: +condition, user_id: userId,
  });
  res.render('profile', { title, price, image, condition, userId });
});

router.post('/newImg', async (req, res) => {
  console.log(req.body);
});

module.exports = router;
