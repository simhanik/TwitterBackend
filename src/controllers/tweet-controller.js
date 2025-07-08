const TweetService = require('../services/tweet-service.js')

const tweetService  = new TweetService()

const createTweet = async (req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully created a new tweet',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a new tweet',
            err:error
        }) 
    }
}

module.exports = {
    createTweet
}