const express = require('express');
// const { User } = require('../db/models/index');

const router = express.Router();

router
.route('/signin')
.get((req, res) => res.render('signin'));
// .post(async (req, res) =>{
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ where: {email}});
//     if (!user) {
//       res.render('signin')
//     }
//   } catch (error) {

//   }
// })



module.exports = router;
