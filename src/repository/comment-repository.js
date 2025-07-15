const CrudRepository = require('./crud-repository.js')

const Comment = require('../model/comment.js')

class CommentRepository extends CrudRepository {
    constructor(){
        super(Comment)
    }
}

module.exports = CommentRepository