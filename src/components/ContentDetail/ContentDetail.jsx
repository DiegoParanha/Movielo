import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as contentAPI from '../../utilities/content-api';

export default function ContentDetail({contents}) {
    const [contentDetail, setContentDetail] = useState(null)

    
    return (
        <>
        <h1>Details</h1>
        <div>
            <p>{contents.Title}</p>
            <p>{contents.Year}</p>
            <p>{contents.Plot}</p>
            <p>{contents.Rated}</p>
            <p>{contents.Poster}</p>
            <p>{contents.Type}</p>
        </div>
        <button>Add to watch List</button>
        <button>Add to watched List</button>
        </>
        )
}