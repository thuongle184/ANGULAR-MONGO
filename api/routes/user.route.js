const express = require('express');
const userRoutes = express.Router();

// Require Business model in our routes module
let User = require('../models/userModel');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  userNameCheck = req.body.username;
  console.log('3', userNameCheck);

  User.findOne({username: userNameCheck}, function(err, user) {
    if (err) {
      console.log('a', err);
      return;
    }
    if(!user){
      console.log('2', user)
      let userAdd = new User(req.body);
      console.log('1', userAdd);
      userAdd.save()
      .then(userAdd => {
        res.status(200).json(true);
      })  
    } 
    // else
    // {
    //   res.json(false);
    // }
  });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users){
        console.log(User);
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});


userRoutes.route('/read/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
    console.log(user);
    if(err){
      console.log(err);
    }
    else {
      res.json(user);
    }
  });
});

userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
      if(err) res.json(err);
      else res.json('User Deleted');
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
      console.log(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById( req.params.id, function(err, user, next) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.username = req.body.username;
      user.password = req.body.password;
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.gmail = req.body.gmail;
      user.save()
      .then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

module.exports = userRoutes;