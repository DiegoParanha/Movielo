import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';
import { Link } from 'react-router-dom';
import './ContentList.css'


export default function ContentList({result, idx, handleDetail}) {
    const [content, setContent] = useState([]);



    useEffect(function() {
        async function getContent() {
            const allContent = await contentAPI.index();
            // console.log(allContent, 'this is line 12')
            setContent(allContent);
        }
        getContent()
        // console.log(getContent(), 'this is line 16')
    }, [])

        return (
            <div className="section" key={idx} >
                {content.Search && content.Search.map((c) => (
                    <>
                    <div>
                    <div className="container">
                            <h3 className="title">{c.Title}</h3>
                            <Link to="/ContentDetail"><img className="poster" src={c.Poster} alt="" /></Link>
                            <div className="row">
                                <p className="info">({c.Year}) · {c.Type}</p>
                            </div>
                            {/* <Link to="/ContentDetail"><button className="detailbtn">Details</button></Link> */}
                            {/* <button onClick={() => handleDetail(result.id)} className="detailbtn">Details</button> */}
                        </div>
                    </div>
                    </>
                ))}
            </div>
        )
}