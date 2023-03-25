const ensureLoggedIn = require("../../config/ensureLoggedIn")
const express = require('express');
const router = express.Router();
const contentCtrl = require('../../controllers/api/contents');


router.get('/', ensureLoggedIn, contentCtrl.index);
router.get('/search', contentCtrl.search);

module.exports = router;