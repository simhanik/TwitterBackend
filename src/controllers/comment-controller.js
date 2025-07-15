const CommentService = require('../services/comment-service.js')

const commentService = new CommentService()

const createComment = async (req, res) => {
    try {
        const response = await commentService.createComment(
            req.query.modelId,
            req.query.modelType,
            req.body.userId,
            req.body.content
        );
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Successfully created comment',
            err: {}
        });
    } catch (error) {
        console.error("Error in create comment:", error); // This helps with debugging
        return res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: error.message || error
        });
    }
};


module.exports = {
    createComment
}