const Content = require("../../models/content.js");

module.exports = {
    createComment, 
    deleteComment,
    editComment,
    updateComment
}

async function updateComment(req, res) {


}

async function editComment() {

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
    const content = await Content.findById(req.params.id);
    console.log(content)
    req.body.user = req.user._id;
    content.comments.push(req.body);
    console.log(content)
    await content.save();
    res.json(content);
}