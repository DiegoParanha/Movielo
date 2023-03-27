import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';
// import ContentCard from "../../components/ContentCard/ContentCard";
import './ContentList.css'


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
                    <div><img src={c.Poster}  /></div>
                    <div className="row">
                        <p>{c.Title}</p>
                        <p>{c.Year}</p>
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}