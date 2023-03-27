import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';
import ContentCard from "../../components/ContentCard/ContentCard";


export default function MovieList() {
const [content, setContent] = useState([]);



useEffect(function() {
    async function getContent() {
        const allContent = await contentAPI.index();
        console.log(allContent, 'this is line 12')
        setContent(allContent);
    }
    getContent()
    console.log(getContent(), 'this is line 16')
}, [])

    return (
        <div>
            {content.Search && content.Search.map((c) => (
                <>
                <div className="container">
                    <div className="row">
                        <img src="https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg" />
                        <p>{c.Title}</p>
                        <p>{c.Year}</p>
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}