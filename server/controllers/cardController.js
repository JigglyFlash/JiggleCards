const pool = require("../database/userModel");
const schema = require('../database/schema')
const userController = require('./userController')
 

const cardController = {
  postCard: async (req, res) => {
    try {
      console.log(req.body);

      const { deck_id, title, title2, content } = req.body;
      const newCard = await pool.query(
        `INSERT INTO card (deck_id, title, title2, content) VALUES($1, $2, $3, $4) RETURNING * `,
        [deck_id, title, title2, content]
      );
      res.json(newCard.rows[0])
    } catch (err) {
      console.log("This is an error in postCard", err.message);
    }
  },
  getCards: async(req, res) => {
    try {

      console.log("reqbody", req.body);
      console.log("reqquery",req.query);

      const {deck_id} = req.body

      const allCards = await pool.query("SELECT * FROM card WHERE deck_id =?",[deck_id]);
      
      res.json(allCards.rows)
    } catch (err) {
      console.log("This is an error in getDeck", err.message);
    }
  }
}

module.exports = cardController;