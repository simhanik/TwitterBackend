const express = require('express')
const {PORT} = require('./config/serverConfig.js')
const connect = require('./config/database.js')

const Tweet = require('./model/tweet.js')
const Comment = require('./model/comment.js')
const TweetRepository = require('./repository/tweet-repository.js')

const app = express()

app.listen(PORT, async ()=> {
    console.log(`Server started on Port : ${PORT}`);
    await connect()
    console.log("Mongodb connected");
    const tweetRepo = new TweetRepository()
    const tweets = await Tweet.find({
        content:["First tweet","my tweet",'4561649']
    })
    console.log(tweets);
    

})