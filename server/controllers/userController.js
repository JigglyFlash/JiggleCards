const { pool } = require("../database/userModel");
const userModel = {
  // Create a new user
  createUser: async (req, res) => {
    const queryText =
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username";
    const { username, password } = req.body;
    try {
      const res = await pool.query(queryText, [username, password]);
      res.locals.newUser = res.rows[0];
      console.log("new user: ", res.rows[0]);
      return next();
    } catch (err) {
      return next({
        log: `error while creating user: ${err}`,
        status: 400,
        message: { err: "An error occurred while creating user" },
      });
    }
  },

  // Find a user by username
  findUserByUsername: async (username) => {
    const queryText = "SELECT * FROM users WHERE username = $1";
    try {
      const res = await pool.query(queryText, [username]);
      return res.rows[0];
    } catch (err) {
      throw new Error("Error retrieving user: " + err.message);
    }
  },
};
module.exports = userModel;
