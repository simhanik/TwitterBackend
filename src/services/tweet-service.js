const {TweetRepository,HashtagRepository} = require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository()
        this.hashtagRepository = new HashtagRepository()

    }

    async create(data){
        const content = data.content
        // Step1 - Extract and normalize hashtags
        let tags = content.match(/#[a-zA-Z0-9_]+/g)   // this regex extracts hashtags
        tags = tags.map((tag) => tag.toLowerCase().substring(1));
        console.log(tags);

        //Step 2 - Create tweet
        const tweet = await this.tweetRepository.create(data)

        // Step 3 - fwetch already existing hashtags
        let alreadyPresentsTags = await this.hashtagRepository.findByName(tags)
        let titleOfPresentTags = alreadyPresentsTags.map(tag => tag.title.toLowerCase())

        // Step 4 - Find new tags to create
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag))
        newTags = newTags.map((tag) => {
            return {title:tag, tweets:[tweet._id]}
        })

        // Create new hashtags
        const response = await this.hashtagRepository.bulkCreate(newTags)
        //console.log(response);

        // Step 6 - Push tweet ID to existing tags and save
        await Promise.all(alreadyPresentsTags.map(async tag => {
            tag.tweets.push(tweet._id)
            await tag.save()
        }))
        
        // // Step 7: Combine all hashtags and assign to tweet
        // const allTags = [...alreadyPresentsTags, ...response];
        // tweet.hashtags = allTags.map(tag => tag._id);
        // await tweet.save();

        return tweet
        
    }

    async get(tweetId) {
        const response = await this.tweetRepository.getWithComment(tweetId)
        return response
    }

}
        //[excited,carrer,js,coding] -> [{title:excited},{title:career}]
        //todo create hashtags and add here
        /**
         * 1. bulcreate in mongoose
         * 2. filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */

module.exports = TweetService