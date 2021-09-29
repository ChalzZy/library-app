const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    slug: String,
    biography: String,
  },
  { collection: "author" }
);

const author = mongoose.model("Author", authorSchema);

module.exports = author;
