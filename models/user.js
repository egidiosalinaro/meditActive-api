const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating user Schema
const userSchema = new Schema({
  name: { type: String, required: [true, 'Name field is required'] },
  surname: { type: String, required: [true, 'Surname field is required'] },
  email: { type: String, required: [true, 'email field is required'] },
});

// creating user model
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
