const ensureLoggedIn = require("../../config/ensureLoggedIn")
const express = require('express');
const router = express.Router();
const contentCtrl = require('../../controllers/api/contents');

// GET /api/contents/
router.get('/', ensureLoggedIn, contentCtrl.index);

// GET / api/contents/search
router.get('/search', ensureLoggedIn, contentCtrl.search);

// GET /api/contents/watchlist
router.get('/watchlist', ensureLoggedIn, contentCtrl.getWatchList);

router.post('/:id/watchlist', ensureLoggedIn, contentCtrl.addToWatchList);

router.delete('/watchlist/:id', ensureLoggedIn, contentCtrl.deleteFromWatchList);

router.delete('/watchedlist/:id', ensureLoggedIn, contentCtrl.deleteFromWatchedList);

// GET /api/contents/watchedlist
router.get('/watchedlist', ensureLoggedIn, contentCtrl.getWatchedList);

router.post('/:id/watchedlist', ensureLoggedIn, contentCtrl.addToWatchedList);

// GET /api/contents/:id
router.get('/:id', ensureLoggedIn, contentCtrl.show);


module.exports = router;