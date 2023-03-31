import { useState } from 'react';
import './CommentForm.css'


export default function CommentForm({handleCreateComment}) {
    const [newComment, setNewComment] = useState({content:"", rating: 5});

    function handleSubmit(evt) {
        evt.preventDefault();
        handleCreateComment(newComment)
        setNewComment({content:"", rating: 5})
    }

    function handleChange(evt) {
        setNewComment({...newComment, [evt.target.name]: evt.target.value})
    }

    return (
        <>
        <form className="commentForm" onSubmit={handleSubmit}>
            <textarea
                className='Commentbox'
                name='content'
                placeholder='Tell Us what you think'
                value={newComment.content}
                onChange={handleChange}
                required 
            />
            <label className="ratingLabel" htmlFor="rating">Rating</label>
            <select className="rating" name="rating" value={newComment.rating} onChange={handleChange}>
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
            <button className="commentbtn" type="submit">Add Comment</button>
        </form>
        </>
    )
}