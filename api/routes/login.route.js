const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require Business model in our routes module
let User = require('../models/userModel');

//  Defined login route
loginRoutes.route('/login:uername, password').post(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect username.' });
      user.comparePassword(password, function(err, isMatch) {
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    });
});

module.exports = loginRoutes;