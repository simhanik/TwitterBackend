const CrudRepository = require('./crud-repository.js')

const User = require('../model/user.js')

class UserRepository extends CrudRepository {
    constructor(){
        super(User)
    }
}

module.exports = UserRepository
