const express = require('express');
const userController = require('./controllers/userController');
const cardController = require('./controllers/cardController');
const router = require('./router');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
//for html form submit
app.use(express.urlencoded({ extended: true }));

app.get(
  '/',
  (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')),
  function (err) {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Server Error');
    }
  },
);
app.get('/display', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../client/index.html'), function (err) {
    if (err) {
      console.log('Error sending file:', err);
      res.status(500).send('Server Error');
    }
  }),
);
app.use('/', router);
// app.use((req, res) => res.sendStatus(404));
// Catch-all handler for any other GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'), function (err) {
    if (err) {
      console.log('Error sending file:', err);
      res.status(500).send('Server Error');
    }
  });
});
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
