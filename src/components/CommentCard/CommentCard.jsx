

export default function CommentCard({comments, handleDeleteComment, date}) {
    const commentsMap = comments.map((comment, idx) => (
        <>
        <h1>
        {comment.user}
        {comment.content}
        {comment.rating}
        </h1>
        <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
        </>
    ))


    return (
        <div>
            <p>{commentsMap}</p>
            {/* <p>{new Date(date).toLocaleString()}</p> */}
        </div>
    )
}