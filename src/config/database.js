const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_dev')
}

module.exports = connect