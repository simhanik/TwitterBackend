const UserService = require('../services/user-service.js')

const userService = new UserService()

const signup = async(req,res) => {
    try {
        const response = await userService.signup({
        email : req.body.email,
        password : req.body.password,
        name : req.body.name
    })
    return res.status(200).json({
        data: response,
        success : true,
        message : 'Successfully creaed a new user',
        err: {}
    })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Something went wrong',
            err: error
        })
    }
}

module.exports = {
    signup
}