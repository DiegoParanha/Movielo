const ensureLoggedIn = require("../../config/ensureLoggedIn")
const express = require('express');
const router = express.Router();
const contentCtrl = require('../../controllers/api/contents');

// GET /api/contents/
router.get('/', ensureLoggedIn, contentCtrl.index);

// GET / api/contents/search
router.get('/search', ensureLoggedIn, contentCtrl.search);

// GET /api/contents/:id
router.get('/:id', ensureLoggedIn, contentCtrl.show);


module.exports = router;