const express = require('express');
const bcrypt = require('bcrypt');
const { Card, User, City } = require('../db/models');
const { checkUser, checkProtection } = require('../middlewares/allMiddleware');

const router = express.Router();

router
  .route('/signup')
  .get((req, res) => res.render('signup'))
  .post(async (req, res) => {
    const {
      name, email, city, password: pass,
    } = req.body;
    try {
      const userCity = await City.create({ name: city });
      const saltRounds = 10;
      const password = await bcrypt.hash(pass, saltRounds);
      const user = await User.create({
        name, email, password, city_id: userCity.id,
      });
      req.session.userName = user.name;
      req.session.userEmail = user.email;
      req.session.userId = user.id;
      // res.redirect('/');
      res.redirect(`/users/profile/${user.id}`);
    } catch (error) {
      res.render('signup', {
        message1: 'User with such email already exists',
        error: {},
      });
    }
  });

router
  .route('/login')
  .get((req, res) => res.render('login'))
  .post(async (req, res) => {
    const { email, password } = req.body;
    // console.log(22222, email, password);

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.render('signup', {
          message1: 'Something went wrong......',
          message2: 'email must be unique',
          message3: 'password must not be blank',
          error: {},
        });
        // return res.redirect('/users/signup');
      }
      const isValidPassword = await bcrypt.compare(req.body.password, user.password);
      if (isValidPassword) {
        req.session.userName = user.name;
        req.session.userEmail = user.email;
        req.session.userId = user.id;
        res.redirect(`/users/profile/${user.id}`);
      }
    } catch (error) {
      res.render('login', {
        message: 'Please try to enter valid email address or password',
        error: {},
      });
    }
  });

router.get('/profile/:id', checkUser, checkProtection, async (req, res) => {
  const userId = Number(req.params.id);
  const allCards = await Card.findAll({ where: { user_id: userId }, raw: true });
  console.log(allCards);
  const cardId =
  res.render('profile', { allCards});
});

router.delete('/profile/:id', async (req, res) => {
  const { postId } = req.params;
  try {
    await Post.destroy({ where: { id: +postId } });
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(418);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userCookie');
  res.redirect('/');
});

module.exports = router;
