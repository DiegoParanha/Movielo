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
    const [showWatchBtn, setShowWatchBtn] = useState(false);
    const [showWatchedBtn, setShowWatchedBtn] = useState(false);

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
                setContentDetails(allContentDetails);
            }
            getContentStuff();
        },[id]);

    async function handleAddToWatchList(contentId, userId) {
        const content = await contentAPI.addToWatchList(contentId, userId);
        return content
    }

    async function handleAddToWatchedList(contentId, userId) {
        const content = await contentAPI.addToWatchedList(contentId, userId);
        return content
    }

    async function handleDeleteFromWatchList(id) {
        const updatedContent = await contentAPI.deleteFromWatchList(id);
        return updatedContent
    }

    async function handleDeleteFromWatchedList(id) {
        const updatedContent = await contentAPI.deleteFromWatchedList(id);
        return updatedContent
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
        <button className="watchBtn" onClick={() => setShowWatchBtn(!showWatchBtn)}>
            {showWatchBtn !== true ?
            'Watch List'
            :
            'Cancel'
            }
            </button>
            
            {showWatchBtn === true ?
            <>
            <div className="watchListBtnDiv">
                <button className="watchListBtn" onClick={() => handleAddToWatchList(contentDetails._id)}>Add to Watch List</button>
                <button className="watchListBtn" onClick={() => handleDeleteFromWatchList(contentDetails._id)}>Remove from Watch List</button>
            </div>
            </>
            :
            null
            }
        
        <button className="watchBtn" onClick={() => setShowWatchedBtn(!showWatchedBtn)}>
            {showWatchedBtn !== true ? 
            'Watched List'
            :
            'Cancel'
            }
            </button>
            {showWatchedBtn === true ?
            <>
            <div className="watchedListBtnDiv">
                <button className="watchedListBtn" onClick={() => handleAddToWatchedList(contentDetails._id)}>Add to Watched List</button>
                <button className="watchedListBtn" onClick={() => handleDeleteFromWatchedList(contentDetails._id)}>Remove from Watched List</button>
            </div>
            </>
            :
            null
            }
        
    
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