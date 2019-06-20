const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose')

    const userRoute = require('./routes/user.route');
    const loginRoute = require('./routes/login.route');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/self-learning', { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/user', userRoute);
    app.use('/userLogin', loginRoute);
    const port = process.env.PORT || 3000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });