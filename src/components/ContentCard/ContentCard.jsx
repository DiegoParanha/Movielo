import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';

export default function ContentCard() {
    const [content, setContent] = useState([]);

    useEffect(function() {
        async function getContent() {
            const allContent = await contentAPI.index();
            setContent(allContent);
        }
        getContent()
    }, [])

    return (
        <>
        <h1>hello</h1>
        <div className="section" >
            <div>
                <div className="container">
                    <h3 className="title">{content.Title}</h3>
                    <img className="poster" src={content.Poster} alt="" />
                    <div className="row">
                        <p className="info">({content.Year}) · {content.Type}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}