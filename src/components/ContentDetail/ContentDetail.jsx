import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as contentAPI from '../../utilities/content-api';
import * as commentsAPI from '../../utilities/comments-api'
import CommentCard from '../../components/CommentCard/CommentCard'
import CommentForm from '../../components/CommentForm/CommentForm'
import './ContentDetail.css'

export default function ContentDetail({user}) {
    const [contentDetails, setContentDetails] = useState(null)
    const {id} = useParams();
    const [showCommentForm, setShowCommentForm] = useState(false);
    // console.log(user);

    async function handleCreateComment(comment) {
        const newContentWithComment = await commentsAPI.createComment(comment, contentDetails._id);
        setContentDetails(newContentWithComment)
    }

    async function handleDeleteComment(id) {
        const updatedContent = await commentsAPI.deleteComment(id);
        setContentDetails(updatedContent)
    }

    async function handleEditComment(id) {
        const editedComment = await commentsAPI.editComment(id);
        setContentDetails(editedComment)
    }

    async function handleUpdateComment(commentId, commentItem) {
        const updatedAfterEditComment = await commentsAPI.updateComment(commentId, commentItem);
        setContentDetails(updatedAfterEditComment)
    }

        useEffect(function() {
            async function getContentStuff() {
                const allContentDetails = await contentAPI.getContentDetails(id);
                // console.log(allContentDetails, "This is all content details")
                // console.log(allContentDetails._id)
                setContentDetails(allContentDetails);
            }
            getContentStuff();
        },[id]);

    async function handleAddToWatchList(contentId, userId) {
        const content = await contentAPI.addToWatchList(contentId, userId);
        console.log(content, 'this is content, line 47') 
        return content
    }

    async function handleAddToWatchedList(contentId, userId) {
        const content = await contentAPI.addToWatchedList(contentId, userId);
        console.log(content, 'this is content, line 47') 
        return content
    }


    if(!contentDetails) return null

    return (
        <>
        <h1>Content Details</h1>
        <div className="detailPage" >
            <div>
                <h2>{contentDetails.Title}</h2>
                <h3 className="detailTitle">({contentDetails.Year}) · {contentDetails.Rated} · {contentDetails.Type}</h3>
                <p className="detailPlot">{contentDetails.Plot}</p>
            </div>
            <img className="detailPoster"src={contentDetails.Poster} alt={contentDetails.Title} />
        </div>
        <button className="watchListBtn" onClick={() => handleAddToWatchList(contentDetails._id)}>Add to watch List</button>
        <button className="watchedListBtn" onClick={() => handleAddToWatchedList(contentDetails._id)}>Add to watched List</button>
        
        <button className="commentBtnForm" onClick={() => setShowCommentForm(!showCommentForm)}>
            {showCommentForm !== true ?
            'Write a Comment'
            :
            'Cancel'   
            }
            </button>
        <>
        {showCommentForm && (
            <CommentForm handleCreateComment={handleCreateComment} />
        )}
        </>
        <CommentCard 
            handleDeleteComment={handleDeleteComment} 
            handleEditComment={handleEditComment} 
            handleUpdateComment={handleUpdateComment}
            comments={contentDetails.comments} 
            user={user}
        />
    
        </>
        )
}