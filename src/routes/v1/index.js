const express = require('express')

const {createTweet} = require('../../controllers/tweet-controller.js')

const {toggleLike} = require('../../controllers/like-controller.js')

const router = express.Router()

router.post('/tweets',createTweet)

router.post('/likes/toggle', toggleLike)

module.exports = router