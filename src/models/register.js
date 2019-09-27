const mongoose = require('mongoose');

const Register = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('register', Register);