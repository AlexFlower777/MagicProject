const router = require("express").Router();
const { Card, User, City, Сondition } = require("../db/models");
const { checkUser, checkProtection } = require("../middlewares/allMiddleware");

// Выведение всех карточек на главный экран
router.get("/", async (req, res) => {
  try {
    const allCards = await Card.findAll({
      include: [
        { model: User, include: { model: City } },
        { model: Сondition },
      ],
      raw: true,
    });

    const allCities = await City.findAll({ raw: true });
    // console.log(allCities);
    res.render("index", { allCards, allCities });
  } catch (err) {
    console.log(err);
  }
});

router.get("/users/profile/:id/new", checkProtection, async (req, res) => {
  try {
    const allCities = await City.findAll({ raw: true });
    res.render("create", { allCities });
  } catch (err) {
    console.log(err);
  }
});

// router.post("/newImg", async (req, res) => {
//   const { title, price, image, condition_id } = req.body;
//   const user_id = req.session.userId;
//   let result = await Card.create({
//     title,
//     price,
//     image,
//     condition_id: +condition_id,
//     user_id,
//   });
// });

router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const allCards = await Card.findAll({
      include: { model: User, where: { city_id: id } },
      raw: true,
    });
    const allCities = await City.findAll({ raw: true });

    console.log(allCards);
    res.render("index", { allCards, allCities });
  } catch (err) {
    console.log(err);
  }
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

router.post("/newImg", async (req, res) => {
  try {
    const { title, price, image, condition } = req.body;
    const allCities = await City.findAll({ raw: true });

    // const condition = await Condition.create({ condition: city });
    const userId = req.session.userId;
    const result = await Card.create({
      title,
      price,
      image,
      condition_id: +condition,
      user_id: userId,
    });

    res.json(userId);
    // res.redirect(`/users/profile/${userId}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
