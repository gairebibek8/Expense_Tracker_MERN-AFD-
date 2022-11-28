const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 4
  }, 
    
  status: String,
  profession: String,
  budget: Number,
  income: Number
  
});

module.exports = mongoose.model('Users', UserSchema);