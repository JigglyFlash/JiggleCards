const { pool } = require('../database/userModel');
const bcrypt = require('bcrypt');

const userController = {
  verifyUser: async (req, res, next) => {
    console.log('inside userController.verifyUser');
    try {
      const { username, password } = req.body;
      const userQuery = 'SELECT * FROM users WHERE username = $1';
      // const findUserID = await pool.query('SELECT * FROM users WHERE username = $1');
      const userResult = await pool.query(userQuery, [username]);
      console.log('userResult: ', userResult.rows[0].id);
      const userID = userResult.rows[0].id;
      //pass down to next middleware functionto get user's deck.
      res.locals.userID = userID;
      res.locals.userName = username;
      if (userResult.rows.length === 0) {
        console.log('user not found');
        return res.redirect('/signup');
      }
      // User exist
      const user = userResult.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        console.log('password incorrect, redirect to signup');
        return res.redirect('/signup');
      } else {
        console.log('Login successfully');
        return res.redirect('/home');
        return next();
      }
    } catch (err) {
      return next({
        log: `Express error handler caught in userController.verifyUser: ${err}`,
        status: 400,
        message: { err: 'error occured while verifying user' },
      });
    }
  },
  // Create a new user
  createUser: async (req, res, next) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPW = await bcrypt.hash(password, salt);
    const queryText =
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
    try {
      const res = await pool.query(queryText, [username, hashedPW]);
      console.log('new user: ', res.rows[0]);
      return next();
    } catch (err) {
      return next({
        log: `error while creating user: ${err}`,
        status: 400,
        message: { err: 'An error occurred while creating user' },
      });
    }
  },
  updatePW: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const salt = await bcrypt.genSalt();
      const hashedPW = await bcrypt.hash(password, salt);
      const queryText = "UPDATE users SET password = '$1' WHERE username = $2 ";
      const response = await pool.query(queryText, [username, hashedPW]);
      console.log('response for update user password', response);
      return next();
    } catch (error) {
      return next({
        log: `Express error handler caught in userController.updatePW: ${err}`,
        status: 400,
        message: { err: 'error occured while updating password' },
      });
    }
  },
  postDeck: async (req, res, next) => {
    try {
      // console.log("userid: ", req.cookies.user_id);
      // console.log("username: ", req.cookies.username);
      const userID = req.cookies.user_id;
      // console.log(req.body);
      // console.log("res.locals", req.locals);
      // console.log("req.query: ", req.query);
      // console.log("req.params: ", req.params);
      const { title, description } = req.body;
      const newDeck = await pool.query(
        `INSERT INTO deck (title, description, user_id) VALUES($1, $2, $3) RETURNING * `,
        [title, description, userID],
      );
      res.json(newDeck.rows[0]);
    } catch (err) {
      console.log('This is an error in postDeck', err.message);
    }
  },
  getDeck: async (req, res) => {
    console.log('inside cookieController.getDeck');
    try {
      const userID = req.cookies.user_id;
      const userName = req.cookies.username;
      const allDecks = await pool.query(`SELECT * FROM deck WHERE user_id=${userID}`);
      console.log('req.cookie', req.cookies);
      res.json(allDecks.rows);
    } catch (err) {
      console.log('This is an error in getDeck', err.message);
    }
  },
};
module.exports = userController;
