import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as contentAPI from '../../utilities/content-api';
import * as commentsAPI from '../../utilities/comments-api'
import CommentCard from '../../components/CommentCard/CommentCard'
import CommentForm from '../../components/CommentForm/CommentForm'
import './ContentDetail.css'

export default function ContentDetail() {
    const [contentDetails, setContentDetails] = useState(null)
    const {id} = useParams();

async function handleCreateComment(comment) {
    const newContentWithComment = await commentsAPI.createComment(comment, contentDetails._id);
    setContentDetails(newContentWithComment)
}

async function handleDeleteComment(id) {
    const updatedContent = await commentsAPI.deleteComment(id);
    setContentDetails(updatedContent)
}

    useEffect(function() {
        async function getContentStuff() {
            const allContentDetails = await contentAPI.getContentDetails(id);
            console.log(allContentDetails, "This is all content details")
            console.log(allContentDetails._id)
            setContentDetails(allContentDetails);
        }
        getContentStuff();
    },[id]);


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
        <button>Add to watch List</button>
        <button>Add to watched List</button>

        <CommentForm handleCreateComment={handleCreateComment} />
        <CommentCard handleDeleteComment={handleDeleteComment} comments={contentDetails.comments}/>
        </>
        )
}