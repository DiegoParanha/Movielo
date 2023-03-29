import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as contentAPI from '../../utilities/content-api';

export default function ContentDetail() {
    const [contentDetails, setContentDetails] = useState(null)
    const {id} = useParams();

    useEffect(function() {
        async function getContentStuff() {
            const allContentDetails = await contentAPI.getContentDetails(id);
            console.log(allContentDetails)
            setContentDetails([allContentDetails]);
        }
        getContentStuff();
    },[id]);

        
    const allContentDetailsMap = contentDetails.map((contentDetail, idx) => (
        <div>
            <p>{contentDetail.Title}</p>
            <p>{contentDetail.Year}</p>
            <p>{contentDetail.Plot}</p>
            <p>{contentDetail.Rated}</p>
            <p>{contentDetail.Poster}</p>
            <p>{contentDetail.Type}</p>
        </div>

    ))

    if(!contentDetails) return null
    return (
        <>
        <h1>Details</h1>
        <div>{allContentDetailsMap}</div>
        <button>Add to watch List</button>
        <button>Add to watched List</button>
        </>
        )
}