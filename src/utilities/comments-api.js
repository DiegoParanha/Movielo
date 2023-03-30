import sendRequest from "./send-request";


export async function createComment(commentData, id) {
    const commentRequest = await sendRequest(`/api/contents/${id}/comments`, 
    'POST', commentData)
    return commentRequest
}


export async function deleteComment(id) {
    const deleteCommentRequest= await sendRequest(`/api/comments/${id}`,
    'DELETE')
    return deleteCommentRequest
}