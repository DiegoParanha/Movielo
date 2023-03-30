

export default function CommentCard({comments, handleDeleteComment, date}) {
    const commentsMap = comments.map((comment, idx) => (
        <>
        <p>{comment.user}</p>
        <p>{comment.content}</p>
        <p>{comment.rating}</p>
        <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
        </>
    ))


    return (
        <div>
            {comments.length ?
            <p>{commentsMap}</p>
            : 
            <p>No Comments Yet</p>
            }
            {/* <p>{new Date(date).toLocaleString()}</p> */}
        </div>
    )
}