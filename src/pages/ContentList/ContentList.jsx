import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';
import ContentCard from "../../components/ContentDetail/ContentDetail";
import { Link } from 'react-router-dom';
import './ContentList.css'


export default function ContentList({result, idx, handleDetail}) {
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
        <div key={idx} >
            {content.Search && content.Search.map((c) => (
                <>
                <div className="section">
                    <div className="container">
                        <h3 className="title">{c.Title}</h3>
                        <img className="poster" src={c.Poster}  />
                        <div className="row">
                            <p className="info">({c.Year}) · {c.Type}</p>
                        </div>
                        <Link to="/ContentDetail"><button className="detailbtn">Details</button></Link>
                        <button onClick={() => handleDetail(result.id)} className="detailbtn">Details</button>
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}