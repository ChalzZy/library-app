var express = require('express');
var app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    // var mascots = [
    //   { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    //   { name: 'Tux', organization: "Linux", birth_year: 1996},
    //   { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    // ];
    // var tagline = "No programming concept is complete without a cute animal mascot.";
  
    res.render('pages/index', {
      // mascots: mascots,
      // tagline: tagline
    });
  });

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

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