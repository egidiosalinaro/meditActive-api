const express = require('express');
const router = express.Router();
const IntervalModel = require('../models/interval');

// get a list of all intervals from the database
router.get('/intervals', (req, res, next) => {
  IntervalModel.find({})
    .then(intervals => {
      res.send(intervals);
    })
    .catch(next);
});

// get a list of intervals filtered by query
router.get('/intervals/filter', (req, res, next) => {
  IntervalModel.find({
    $or: [
      { user: req.query.user },
      { starting: req.query.start },
      { ending: req.query.end },
      { relatedGoal: req.query.goal },
    ],
  })
    .then(filteredIntervals => {
      res.send(filteredIntervals);
    })
    .catch(next);
});

// create a new interval
router.post('/intervals', (req, res, next) => {
  IntervalModel.create(req.body)
    .then(newInterval => {
      res.send(
        `You've successfully created a new interval with following details: \n \n ${newInterval}`
      );
    })
    .catch(next);
});

// check a specific interval's details
router.get('/intervals/:id', (req, res, next) => {
  IntervalModel.findById({ _id: req.params.id })
    .then(specificInterval => {
      res.send(specificInterval);
    })
    .catch(next);
});

// update an interval in the database
router.put('/intervals/:id', (req, res, next) => {
  IntervalModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    interval => {
      IntervalModel.findOne({ _id: req.params.id })
        .then(updatedInterval => {
          res.send(`Interval updated: \n \n ${updatedInterval}`);
        })
        .catch(next);
    }
  );
});

// delete an interval from the database
router.delete('/intervals/:id', (req, res, next) => {
  IntervalModel.findByIdAndRemove({ _id: req.params.id })
    .then(deletedInterval => {
      res.send(`Interval ${deletedInterval.id} deleted`);
    })
    .catch(next);
});

module.exports = router;
