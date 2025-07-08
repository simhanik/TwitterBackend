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
    // const tweets = await Tweet.find({
    //     content:["First tweet","my tweet",'4561649']
    // })
    // console.log(tweets);
    // let response = await tagRepo.findByName(['Trend','Fun'])
    // console.log(response);
    // response = response.map((tags) => tags.title)
    // console.log(response);
    
    const tweet = await serRepo.create({content:'is #testing #working ? #excited, it is going to be #Fun'})
    console.log(tweet);
    
})