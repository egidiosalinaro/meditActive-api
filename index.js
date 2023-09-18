const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { connectToDB, disconnectToDB } = require('./databaseConnection');

const app = express();
const usersRoute = require('./routes/users');
const intervalsRoute = require('./routes/intervals');
const goalsRoute = require('./routes/goals');

// logger
app.use(
  morgan(
    'on :date[web], developer used :method method on the :url api. The request gave a :status status in :response-time ms'
  )
);

// body parser
app.use(bodyParser.json());

// security middleware
app.use(helmet());

// sanitize filter
mongoose.set('sanitizeFilter', true);

connectToDB();

// initialize routes
app.use('/meditactive', usersRoute);
app.use('/meditactive', intervalsRoute);
app.use('/meditactive', goalsRoute);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// error 404 middleware
app.get('*', (req, res) => {
  res.status(404).json({ message: '404: Not Found' });
});

// listen for requests
const port = 5000;
app.listen(port, () => console.log(`Now listening on port ${port}...`));
