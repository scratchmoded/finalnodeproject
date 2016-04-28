var express = require('express');
var controller = require('./post.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/upvotes', controller.update_upvotes);
router.post('/:id/comments', controller.add_comment);
router.post('/:post_id/comments/:comment_id/upvotes', controller.update_comment_upvotes);

module.exports = router;