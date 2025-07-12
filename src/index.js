const express = require('express')
const {PORT} = require('./config/serverConfig.js')
const connect = require('./config/database.js')

const bodyParser = require('body-parser')

const Tweet = require('./model/tweet.js')
const Comment = require('./model/comment.js')

const TweetRepository = require('./repository/tweet-repository.js')
const HashtagRepository = require('./repository/hashtag-repository.js')
const tagRepo = new HashtagRepository()


const TweetService = require('./services/tweet-service.js')
const serRepo = new TweetService()


const app = express()

const LikeService = require('./services/like-service.js')
const {UserRepository} = require('./repository/index.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const apiRoutes = require('./routes/index.js')
app.use('/api',apiRoutes)

app.listen(PORT, async ()=> {
    console.log(`Server started on Port : ${PORT}`);
    await connect()
    console.log("Mongodb connected");


    const tweetRepo = new TweetRepository()
    const tweets = await tweetRepo.getAll(0,10)
    // Creating a user
    const userRepo = new UserRepository()
    // const user = await userRepo.create({
    //     email:'nikhil@admin.com',
    //     password:'123456',
    //     name:'Nikhil'
    // })
    const users = await userRepo.getAll()
    const likeService = new LikeService()
    await likeService.toggleLike(tweets[0]._id, 'Tweet', users[0]._id)
})