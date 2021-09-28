var express = require('express');
var app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index', {
    });
  });

// // about page
// app.get('/guest', function(req, res) {
//   res.render('pages/guest');
// });

app.use(routes)

// mongoose connection
const dbURI = 'mongodb://localhost:27017/node-auth';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
})

app.listen(3000);
console.log('Server is listening on port 3000');