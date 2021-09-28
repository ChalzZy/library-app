const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

// Navigation
router.get("/guest", controller.guest_get);
router.get("/librarian", controller.librarian_get);
router.get("/bookworm", controller.bookworm_get);

// Buttons
router.post("/guestButton", controller.guestButton_post);

module.exports = router;
