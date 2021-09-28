var express = require("express");
var app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index");
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// view engine
app.set("view engine", "ejs");

// routes
app.use(routes);

// mongoose connection
const dbURI = "mongodb://localhost:27017/authors";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// launch server
app.listen(3000);
console.log("Server is listening on port 3000");
