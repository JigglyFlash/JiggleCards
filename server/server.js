const express = require('express');
const userController = require('./controllers/userController');
const cardController = require('./controllers/cardController');
const router = require('./router');
const path = require('path');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
//for html form submit
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));
//app.use('/', router);

app.use((req, res) => res.status(404).send('Page Not Found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
