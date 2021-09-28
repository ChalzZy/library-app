const mongoose = require("mongoose");
const Book = require("../models/book");

module.exports.index_get = (req, res) => {
  Book.find({}, function (err, book) {
    res.render("pages/index", {
      bookList: book,
    });
  });
  //res.render("pages/index", {});
};

module.exports.guest_get = (req, res) => {
  res.render("pages/guest");
};

module.exports.librarian_get = (req, res) => {
  res.render("pages/librarian");
};

module.exports.bookworm_get = (req, res) => {
  res.render("pages/bookworm");
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
