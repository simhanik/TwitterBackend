const Hashtag = require('../model/hashtags.js')

class HashtagRepository {
    async create(data){
        try {
            const tag = await Hashtag.create(data)
            return tag
        } catch (error) {
            console.log(error);
            
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data)
            return tags
        } catch (error) {
            console.log(error)
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id)
            return tag
        } catch (error) {
            console.log(error);
            
        }
    }

    async destroy(id){
        try {
            const tag = await Hashtag.findByIdAndDelete(id)
            return tag
        } catch (error) {
            console.log(error);
            
        }
    }
    async findByName(titleList) {
    try {
        const tags = await Hashtag.find({
            title: { $in: titleList }
        });
        return tags;
    } catch (error) {
        console.log(error);
    }
}
}

module.exports = HashtagRepository