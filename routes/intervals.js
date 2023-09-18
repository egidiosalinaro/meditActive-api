const express = require('express');
const router = express.Router();
const IntervalModel = require('../models/interval');

// BISOGNA ANCORA FILTRARE TRA GLI INTERVALLI!!

// get list of all intervals from the database
router.get('/intervals', (req, res, next) => {
  IntervalModel.find({}).then(intervals => {
    res.send(intervals);
  });
});

// create a new interval
router.post('/intervals', (req, res, next) => {
  IntervalModel.create(req.body)
    .then(interval => {
      res.send(interval);
    })
    .catch(next);
});

// check a specific interval's details
router.get('/intervals/:id', (req, res, next) => {
  IntervalModel.findById({ _id: req.params.id }).then(interval => {
    res.send(interval);
  });
});

// update an interval in the database
router.put('/intervals/:id', (req, res, next) => {
  IntervalModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    interval => {
      IntervalModel.findOne({ _id: req.params.id }).then(interval => {
        res.send(`Interval updated: \n ${interval}`);
      });
    }
  );
});

// delete an interval from the database
router.delete('/intervals/:id', (req, res, next) => {
  IntervalModel.findByIdAndRemove({ _id: req.params.id }).then(interval => {
    res.send(`Interval ${interval.id} deleted`);
  });
});

module.exports = router;
