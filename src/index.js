const express = require('express')
const {PORT} = require('./config/serverConfig.js')
const connect = require('./config/database.js')

const Tweet = require('./model/tweet.js')
const Comment = require('./model/comment.js')
const TweetRepository = require('./repository/tweet-repository.js')
const HashtagRepository = require('./repository/hashtag-repository.js')
const tagRepo = new HashtagRepository()
const tweetRepo = new TweetRepository()

const TweetService = require('./services/tweet-service.js')
const serRepo = new TweetService()
const app = express()

app.listen(PORT, async ()=> {
    console.log(`Server started on Port : ${PORT}`);
    await connect()
    console.log("Mongodb connected");
    const tweet = await serRepo.create({content:'captal #CAPITAL #TREND, #fUN #ExciTED'})
    console.log(tweet);
    
})