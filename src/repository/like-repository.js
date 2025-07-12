const CrudRepository = require('./crud-repository.js')

const Like = require('../model/like.js')

class LikeRepository extends CrudRepository {
    constructor(){
        super(Like)
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data)
            return like
        } catch (error) {
            throw error
        }
    }
     async delete(id) {
        return await Like.findByIdAndDelete(id);
    }
}

module.exports = LikeRepository
