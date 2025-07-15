const Tweet = require('../model/tweet.js')
const CrudRepository = require('./crud-repository.js')

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet)
    }
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

    async getWithComment(id){
        try {
            const tweet = await Tweet.findById(id).populate({
                path:'comments',
                populate:{
                    path:'comments'
                }
            })
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

    async get(id){
        try {
            const result = await Tweet.findById(id).populate({path:'likes'})
            return result
        } catch (error) {
            console.log("Something went wrong in the crud repo");
            throw error
            
        }
    }
}

module.exports = TweetRepository