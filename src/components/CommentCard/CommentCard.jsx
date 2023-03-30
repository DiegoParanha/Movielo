import './CommentCard.css'

export default function CommentCard({comments, handleDeleteComment, handleEditComment, handleUpdateComment}) {
    const commentsMap = comments.map((comment, idx, date) => (
        <>
        <div className="comment">
            <div className='commentUser'>
                <p className='userName'>{comment.user.name}</p>
            </div>
            <p className='userComment'>{comment.content}</p>
            <p className="commentRating">Rating: {comment.rating}</p>
            <p className='commentDate'>Made on: {new Date(date).toLocaleString()}</p>
            <button className='editComment' onClick={() => handleUpdateComment(comment._id)}>Update</button>
            <button className='deleteComment' onClick={() => handleDeleteComment(comment._id)}>Delete</button>
        </div>
        </>
    ))


    return (
        <>
        <div>
            {comments.length ?
            <p className='commentMap'>{commentsMap}</p>
            : 
            <p className='noComment'>No Comments Yet</p>
            }
        </div>
        </>
        )
    }