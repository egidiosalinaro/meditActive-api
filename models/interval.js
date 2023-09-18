const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating interval Schema
const intervalSchema = new Schema({
  user: {
    type: mongoose.ObjectId,
    required: [true, 'please declare the user who owns this interval'],
  },
  starting: {
    type: Date,
    default: Date.now,
  },
  ending: {
    type: Date,
    required: [true, 'please set an ending date for this goal'],
  },
});

// creating interval model
const IntervalModel = mongoose.model('interval', intervalSchema);

module.exports = IntervalModel;
