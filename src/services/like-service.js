const {LikeRepository,TweetRepository} = require('../repository/index.js')

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
    }

    async toggleLike(modelId, modelType, userId){ // /api/v1/likes/toggle?id=modelId&type=Tweet
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.get(modelId)
            //await likeable.populate('likes')
        } else if(modelType == 'Comment'){
            // ToDo
        } else {
            throw new Error('unknown model type')
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        })
        if(exists){
            likeable.likes.pull(exists.id)
            await likeable.save()
            //await exists.delete()
            await this.likeRepository.delete(exists._id);
            var isAdded = false;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isAdded = true;
        }
        return isAdded
    }
}

module.exports = LikeService