const LikeService = require('../services/like-service.js')

const likeService = new LikeService()

const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(
            req.query.modelId,
            req.query.modelType,
            req.body.userId
        );
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Successfully toggled like',
            err: {}
        });
    } catch (error) {
        console.error("Error in toggleLike:", error); // This helps with debugging
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: error.message || error
        });
    }
};


module.exports = {
    toggleLike
}