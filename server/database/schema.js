const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`;

const createDeckTable = `
  CREATE TABLE IF NOT EXISTS deck (
    id SERIAL PRIMARY KEY,
    title VARCHAR(1000) NOT NULL,
    user_id INTEGER REFERENCES users(id),
    description VARCHAR(1000)
  )
`;

const createCardTable = `
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    deck_id INTEGER REFERENCES decks(id),
    title VARCHAR(1000) NOT NULL,
    title2 VARCHAR(1000),
    content TEXT
  )
`;

module.exports = {
  createUsersTable,
  createDeckTable,
  createCardTable
};