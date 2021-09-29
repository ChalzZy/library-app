const mongoose = require("mongoose");
const Book = require("../models/book");
const Author = require("../models/author");

module.exports.index_get = (req, res) => {
  Book.find({}, function (err, book) {
    res.render("pages/index", {
      bookList: book,
    });
  });
};

module.exports.authors_get = (req, res) => {
  Author.find({}, function (err, author) {
    res.render("pages/authors", {
      authorList: author,
    });
  });
  //res.render("pages/authors");
};

module.exports.books_get = (req, res) => {
  Book.find({}, function (err, book) {
    res.render("pages/books", {
      bookList: book,
    });
  });
  //res.render("pages/books");
};

module.exports.guestButton_post = async (req, res) => {
  const variable = req.body;

  try {
    const hello = "Hello World";
    res.status(200).json({ hello });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};
