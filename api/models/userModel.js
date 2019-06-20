const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for user
let userSche = new Schema({
  username: String,
  password: String, 
  firstname: String,
  lastname: String,
  gmail: String
},{
    collection: 'users'
});

module.exports = mongoose.model('userModel', userSche, 'users');