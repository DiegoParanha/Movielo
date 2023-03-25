import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';
import ContentCard from "../../components/ContentCard/ContentCard";


export default function HomePage() {
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
                <p>{c.Title}</p>
                <p>{c.Year}</p>
                </>
            ))}
        </div>
    )
}

