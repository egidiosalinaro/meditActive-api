const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

// get list of all users from the database
router.get('/users', (req, res, next) => {
  UserModel.find({}).then(users => {
    res.send(users);
  });
});

// add a new user to the database
router.post('/users', (req, res, next) => {
  UserModel.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(next);
});

// check a specific user's details
router.get('/users/:id', (req, res, next) => {
  UserModel.findById({ _id: req.params.id }).then(user => {
    res.send(user);
  });
});

// update a user in the database
router.put('/users/:id', (req, res, next) => {
  UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(user => {
    UserModel.findOne({ _id: req.params.id }).then(user => {
      res.send(user);
    });
  });
});

// delete a user from the database
router.delete('/users/:id', (req, res, next) => {
  UserModel.findByIdAndRemove({ _id: req.params.id }).then(user => {
    res.send(`User ${user.name} ${user.surname} deleted`);
  });
});

module.exports = router;
