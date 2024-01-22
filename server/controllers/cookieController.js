const cookieController = {};

//helper function to get random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

cookieController.setCookie = async (req, res, next) => {
  // console.log('inside cookieController.setCookie');
  try {
    res.cookie('userName', res.locals.userName, { httpOnly: true });
    res.cookie('user_id', getRandomInt(99), { httpOnly: true });
    return next();
  } catch (error) {
    return next({
      log: `cookieController.setCookie: ${error}`,
      message: { err: 'error in creating cookie' },
      status: 400,
    });
  }
};

cookieController.verifyCookie = async (req, res, next) => {
  try {
    if (!req.cookies.user_id || !req.cookies.userName) {
      console.log('req.cookies:', req.cookies);
      return next({
        log: 'Express error handler caught in userController.verifycookie',
        status: 400,
        message: { err: 'Missing cookies' },
      });
    } else {
      return next();
    }
  } catch (error) {
    return next({
      log: `cookieController.verifyCookie: ${error}`,
      message: { err: 'cookie is not valid' },
      status: 401,
    });
  }
};
module.exports = cookieController;
