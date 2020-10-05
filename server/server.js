const path = require('path');
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// SET UP ENV VARIABLES
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

// SERVER
const server = express();
const PORT = process.env.PORT || 3000;

// SET UP
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// DEFAULT ROUTE
server.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' });
});

// GLOBAL ERROR HANDLER
server.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error: Unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };

  console.log('ERROR LOG => ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === 'production') {
  server.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  server.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });
}

server.listen(PORT);

// * Helpful Logs
console.log('NODE_ENV mode is', process.env.NODE_ENV);
console.log('Remember to check your .env file if you cannot connect to the database');
console.log(`Server is listening at http://localhost:${PORT}`);
console.log(`Client is live at http://localhost:8080`);
