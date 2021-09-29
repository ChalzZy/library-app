const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

// Index
router.get("/", controller.index_get);

// Navigation
router.get("/authors", controller.authors_get);
router.get("/books", controller.books_get);

// Buttons
router.post("/guestButton", controller.guestButton_post);

module.exports = router;
