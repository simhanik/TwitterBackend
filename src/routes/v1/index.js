const express = require('express')

const {createTweet} = require('../../controllers/tweet-controller.js')

const router = express.Router()

router.post('/tweets',createTweet)

module.exports = router