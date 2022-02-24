const addToLocals = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.userName = req.session?.userName;
  // console.log('addto', { locals: res.locals, session: req.session });
  next();
};

const checkUser = (req, res, next) => {
  if (req.session.userName) {
    next();
  } else {
    res.redirect('/users/login');
  }
};

const checkProtection = async (req, res, next) => {
  if (Number(req.session.userId) === Number(req.params.id)) {
    next();
  } else {
    res.redirect(`/users/profile/${req.session.userId}`);
  }
};

module.exports = { addToLocals, checkUser, checkProtection };
