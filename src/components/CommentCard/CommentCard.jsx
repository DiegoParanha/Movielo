import './CommentCard.css'

export default function CommentCard({comments, user, handleDeleteComment, handleEditComment, handleUpdateComment}) {
    const commentsMap = comments.map((comment, idx) => (
        <>
        <div className="comment">
            <div className='commentUser'>
                <p className='userName'>{comment.user.name}</p>
            </div>
            <p className="commentRating">Rating: {comment.rating}</p>
            <p className='commentDate'>Made on: {new Date(comment.createdAt).toLocaleString()}</p>
            <p className='userComment'>{comment.content}</p>
            {user._id === comment.user._id ?
            <>
                <button className='editComment' onClick={() => handleEditComment(comment._id)}>Edit</button>
                <button className='deleteComment' onClick={() => handleDeleteComment(comment._id)}>Delete</button>
            </>   
            :
            null
            }
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