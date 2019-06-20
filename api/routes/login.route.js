const express = require('express');
const app = express();
const loginRoutes = express.Router();

// Require Business model in our routes module
let User = require('../models/userModel');

loginRoutes.post('/login',function (req, res) {
  let username = req.body.userName;
  let pass = req.body.password;
  User.findOne({username: username}, function(err, user) {
    if (err) {
      console.log('a', err);
      return
    }
    if(!user){
      res.end("No account match");
    } 
    else if (user.username == username && user.password == pass){
      res.json('Login completed');
    } 
      else {
      console.log("Credentials wrong");
      res.end("Credentials wrong");
      }
  });
})

module.exports = loginRoutes;