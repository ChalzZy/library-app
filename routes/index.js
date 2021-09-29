const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

// Index
router.get("/", controller.index_get);

// Navigation
router.get("/authors", controller.authors_get);
router.get("/books", controller.books_get);

module.exports = router;
