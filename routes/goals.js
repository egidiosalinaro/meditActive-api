const express = require('express');
const router = express.Router();
const GoalModel = require('../models/goal');

// get list of all goals from the database
router.get('/goals', (req, res, next) => {
  GoalModel.find({}).then(goals => {
    res.send(goals);
  });
});

// create a new goal
router.post('/goals', (req, res, next) => {
  GoalModel.create(req.body)
    .then(newGoal => {
      res.send(newGoal);
    })
    .catch(next);
});

// check a specific goal's details
router.get('/goals/:id', (req, res, next) => {
  GoalModel.findById({ _id: req.params.id }).then(specificGoal => {
    res.send(specificGoal);
  });
});

// update a goal in the database
router.put('/goals/:id', (req, res, next) => {
  GoalModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    updatedGoal => {
      GoalModel.findOne({ _id: req.params.id }).then(updatedGoal => {
        res.send(`Goal updated: \n ${updatedGoal}`);
      });
    }
  );
});

// delete a goal from the database
router.delete('/goals/:id', (req, res, next) => {
  GoalModel.findByIdAndRemove({ _id: req.params.id }).then(deletedGoal => {
    res.send(`Goal ${deletedGoal.id} deleted`);
  });
});

module.exports = router;
