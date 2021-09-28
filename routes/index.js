const { Router } = require('express')
const controller = require('../controllers/controller')
const router = Router();

router.get('/guest', controller.guest_get);
router.get('/librarian', controller.librarian_get)
router.get('/bookworm', controller.bookworm_get)

module.exports = router;