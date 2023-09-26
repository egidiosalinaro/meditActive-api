const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

// get a list of all users from the database
router.get('/users', (req, res, next) => {
  UserModel.find({})
    .then(users => {
      res.send(users);
    })
    .catch(next);
});

// add a new user to the database
router.post('/users', (req, res, next) => {
  UserModel.create(req.body)
    .then(newUser => {
      res.send(
        `You've successfully added a new user with following details: \n \n ${newUser}`
      );
    })
    .catch(next);
});

// check a specific user's details
router.get('/users/:id', (req, res, next) => {
  UserModel.findById({ _id: req.params.id })
    .then(specificUser => {
      res.send(specificUser);
    })
    .catch(next);
});

// update a user in the database
router.put('/users/:id', (req, res, next) => {
  UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(user => {
    UserModel.findOne({ _id: req.params.id })
      .then(updatedUser => {
        res.send(`User updated: \n \n ${updatedUser}`);
      })
      .catch(next);
  });
});

// delete a user from the database
router.delete('/users/:id', (req, res, next) => {
  UserModel.findByIdAndRemove({ _id: req.params.id })
    .then(deletedUser => {
      res.send(
        `User ${deletedUser.name} ${deletedUser.surname} successfully deleted`
      );
    })
    .catch(next);
});

module.exports = router;
