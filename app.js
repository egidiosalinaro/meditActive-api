const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const usersRoute = require('./routes/users');
const goalsRoute = require('./routes/goals');
const intervalsRoute = require('./routes/intervals');

// logger
app.use(
  morgan(
    'on :date[web], developer used :method method on the :url api. The request gave a :status status in :response-time ms'
  )
);

// body parser and query parameters
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// security middleware
app.use(helmet());

// sanitize filter
mongoose.set('sanitizeFilter', true);

// initialize routes
app.use('/meditactive', usersRoute);
app.use('/meditactive', goalsRoute);
app.use('/meditactive', intervalsRoute);

// unprocessable error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// error 404 not found handling middleware
app.get('*', (req, res) => {
  res.status(404).json({ message: '404: Not Found' });
});

module.exports = app;
