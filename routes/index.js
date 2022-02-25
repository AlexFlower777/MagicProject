const router = require("express").Router();
const { Card, User, City, Сondition } = require("../db/models");
const { Op } = require("sequelize");

// Выведение всех карточек на главный экран
router.get("/", async (req, res) => {
  const allCards = await Card.findAll({
    include: { model: User },
    raw: true,
  });

  // Заготовка на сложный запрос из БД
  // const allCards = await User.findAll({
  //   include: [{ model: Card }, { model: City }],
  // });

  const allCities = await City.findAll({ raw: true });
  console.log(allCards);
  // console.log(allCities);
  res.render("index", { allCards, allCities });
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const allCards = await Card.findAll({
    include: { model: User, where: { city_id: id } },
    raw: true,
  });
  const allCities = await City.findAll({ raw: true });
  console.log(allCards);
  res.render("index", { allCards, allCities });
});

// Ручка для поиска города и динамической выдачи результата
// router.route("/").post(async (req, res) => {
//   const search = req.body.search;
//   console.log(search);
//   try {
//     const cities = await City.findAll({
//       where: { name: { [Op.iLike]: `${search}%` } },
//       raw: true,
//     });
//     return res.json(cities);
//   } catch (err) {
//     return res.json({ status: false });
//   }
// });

// router.get("/test", async (req, res) => {
//   const allCards = await Card.findAll({ raw: true });
//   console.log(allCards);
//   res.render("index", { allCards });
// 

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
