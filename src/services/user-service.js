// const User = require('../model/user.js')
const {UserRepository} = require('../repository/index.js')

class UserService {
    constructor(){
        this.userRepository = new UserRepository
    }

    async signup(data) {
        try {
            const user = await this.userRepository.create(data)
            return user
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService