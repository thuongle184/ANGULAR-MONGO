const express = require('express');
const app = express();
const loginRoutes = express.Router();

// Require Business model in our routes module
let User = require('../models/userModel');

loginRoutes.post('/login',function (req, res) {
  let username = req.body.userName;
  let pass = req.body.password;
  User.findOne({username: username, password: pass}, function(err,user) {
    console.log(user)
    if (err) {
      console.log('a', err);
      return;
    }
    if(user){
      res.json(true);
    }else{
      console.log("else")
      res.json(false);
    } 
  })
})

module.exports = loginRoutes;