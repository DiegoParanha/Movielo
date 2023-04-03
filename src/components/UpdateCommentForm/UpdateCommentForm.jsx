import { useState } from "react"
import "./UpdateCommentForm.css"


export default function UpdateCommentForm({ handleUpdateComment, commentId}) {
    const [updateCommentItem, setUpdateCommentItem] = useState({
        content: "",
        rating: 5
    });


    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdateComment(commentId, updateCommentItem)
        setUpdateCommentItem({content:"", rating: 5})
    }

    function handleInputChange(evt) {
        setUpdateCommentItem({...updateCommentItem, [evt.target.name]: evt.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className="editCommentText">Edit:</label>
            <textarea name="content" className="editText" placeholder='Update your comment' value={updateCommentItem.content} onChange={handleInputChange} />
            <label className="editRatingText">Rating:</label>
            <select className="rating" name="rating" value={updateCommentItem.rating} onChange={handleInputChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option selected value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            <button className="commentbtn" type="Submit">Update Comment</button>
        </form>
    )

}