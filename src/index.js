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

    // for creating tweets

    // const tweet = await Tweet.create({
    //     content:'Third tweet'
        
    // })
    // console.log(tweet);

    // const tweets = await Tweet.find({userEmail:'a@b.com'})  // we can also pass the filter
    // console.log(tweets);
    
    // const tweet = await Tweet.findById('686836fc6279e4af748d8491')
    
    // tweet.userEmail = 'b@c.com'
    // await tweet.save()
    // console.log(tweet);
    
    // const tweet1 = await tweetRepo.update('686836fc6279e4af748d8491',{content:'my latest tweet is working now'})
    // // const tweet = await tweetRepo.get('686836fc6279e4af748d8491')
    // //console.log(tweet);
    // console.log(tweet1);

    // const tweet2 = await tweetRepo.create({
    //     content:'my tweet'
    // })
    // console.log(tweet2);
    
    // tweet2.comments.push({content:'Tweet with comment '})
    // await tweet2.save()
    // console.log(tweet2);

    // const tweet3 = await tweetRepo.create({content:'Tweet with comment Schema'})
    // console.log(tweet3);
    // const comment  = await Comment.create({content:'Comment with Schema'})
    // tweet3.comments.push(comment)
    // await tweet3.save()
    // console.log(tweet3);

    // const tweet4 = await tweetRepo.getWithComment('6868c4ebd59853d64a70ab54')
    // console.log(tweet4);
      
    const tweet5 = await tweetRepo.getAll(0,2)
    console.log(tweet5);
    
    console.log(tweet5[0].contentWithEmail);
    
    const tweet6 = await tweetRepo.create({content:'With hooks now'})
    console.log(tweet6);
    
    
    
    
    
})