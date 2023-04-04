const Content = require("../../models/content.js");
const User = require("../../models/user");

module.exports = {
    createComment, 
    deleteComment,
    editComment,
    updateComment
}

async function updateComment(req, res) {
    const content = await Content.findOne({'comments._id': req.params.id, 'comments.user' : req.user._id});
    const commentId = content.comments.id(req.params.id);
    commentId.content = req.body.content
    commentId.rating = req.body.rating
    if (!commentId.user.equals(req.user._id)) { 
        return res.status(401).json({message: 'Error'})
    } 
    try {
        await content.save();
    } catch (e) {
        console.log(e.message)
    }
    res.json(content);
}

async function editComment(req, res) {
    const content = await Content.findOne({'comments._id': req.params.id});
    const comment = content.comments.id(req.params.id);
    res.json('comments/edit', {comment});
}

async function deleteComment(req, res, next) {
    const content = await Content.findOne({
        'comments._id': req.params.id,
        'comments.user': req.user._id
    })
    content.comments.remove(req.params.id);
    await content.save();
    res.json(content);
}

async function createComment(req, res) {
    const user = await User.findById(req.user._id)
    const content = await Content.findById(req.params.id).populate('comments.user')
    const comment = content.comments.create({
        content: req.body.content,
        rating: req.body.rating,
        user: user
    })
    console.log(content)
    content.comments.push(comment);
    await content.save();
    await content.populate('comments.user', 'name')
    res.json(content);
}