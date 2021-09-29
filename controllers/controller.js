const Book = require("../models/book");
const Author = require("../models/author");

// homepage
module.exports.index_get = (req, res) => {
  Book.find({}, function (err, book) {
    res.render("pages/index", {
      bookList: book,
    });
  });
};

// authors page
module.exports.authors_get = (req, res) => {
  Author.find({}, function (err, author) {
    res.render("pages/authors", {
      authorList: author,
    });
  });
};

// books page
module.exports.books_get = (req, res) => {
  Book.find({}, function (err, book) {
    res.render("pages/books", {
      bookList: book,
    });
  });
};
