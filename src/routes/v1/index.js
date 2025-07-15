const express = require('express')

const {createTweet, getTweet} = require('../../controllers/tweet-controller.js')

const {toggleLike} = require('../../controllers/like-controller.js')

const {createComment} = require('../../controllers/comment-controller.js')

const router = express.Router()

router.post('/tweets',createTweet)
router.get('/tweets/:id', getTweet)

router.post('/likes/toggle', toggleLike)

router.post('/comment', createComment)

module.exports = router