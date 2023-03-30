const Content = require("../../models/content.js");
const User = require("../../models/user");

module.exports = {
    createComment, 
    deleteComment,
    editComment,
    updateComment
}

async function updateComment(req, res) {
    const content = await Content.findOne({'comments._id': req.params.id});
    const commentSubdoc = Content.comments.id(req.params.id);
    if (!commentSubdoc.userId.equals(req.user._id)) return res.json(content)
    commentSubdoc.content = req.body.content;
    await content.save();
    res.json(content)
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
    // console.log(content.comments[0].user.name, "this is line 33")
    const comment = content.comments.create({
        content: req.body.content,
        rating: req.body.rating,
        user: user
    })
    console.log(content)
    // req.body.user = req.user._id;
    // content.comments.push(req.body);
    content.comments.push(comment);
    await content.save();
    await content.populate('comments.user', 'name')
    res.json(content);
}