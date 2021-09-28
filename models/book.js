const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    author: String,
    author_id: String,
    author_bio: String,
    authors: String,
    title_slug: String,
    author_slug: String,
    isbn13: String,
    isbn10: String,
    price: String,
    format: String,
    publisher: String,
    pubdate: String,
    edition: String,
    subjects: String,
    pages: String,
    dimensions: String,
    overview: String,
    synopsis: String,
    toc: String,
  },
  { collection: "book" }
);

const book = mongoose.model("Book", bookSchema);

module.exports = book;
