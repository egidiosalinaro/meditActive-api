const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating goal Schema
const goalSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please set a title for this goal'],
  },
  description: {
    type: String,
    default: 'a challenging goal',
  },
  days: {
    type: Number,
    required: [true, 'please define how many days this goal usually requires'],
  },
});

// creating goal model
const GoalModel = mongoose.model('goal', goalSchema);

module.exports = GoalModel;
