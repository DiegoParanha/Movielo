const ensureLoggedIn = require("../../config/ensureLoggedIn")
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');

// POST /api/contents/:id/comments
router.post('/contents/:id/comments', ensureLoggedIn, commentsCtrl.createComment)

// DELETE /api/comments/:id
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.deleteComment)

module.exports = router;