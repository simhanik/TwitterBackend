const Tweet = require('../model/tweet.js')

class TweetRepository {
    async create(data) {
        try {
            const tweet = new Tweet(data);  // ✅ proper document instance
            await tweet.save();             // ✅ saves to DB
            return tweet;                   // ✅ can be modified later (hashtags etc.)
        } catch (error) {
            console.log("Error creating tweet:", error);
            throw error;
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id)
            return tweet
        } catch (error) {
            console.log(error);
            
        }
    }

    async getWithComment(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'})
            return tweet
        } catch (error) {
            console.log(error);
            
        }
    }
    
    async destroy(id){
        try {
            const tweet = await Tweet.findByIdAndDelete(id)
            return tweet
        } catch (error) {
            console.log(error);
            
        }
    }

    async getAll(offset,limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit)
            return tweet
        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports = TweetRepository