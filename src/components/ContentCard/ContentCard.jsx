import { useState, useEffect } from "react";
import * as contentAPI from '../../utilities/content-api';
import './ContentCard.css'
import { useNavigate } from 'react-router-dom';

export default function ContentCard({watchContent, handleDetail}) {
    const navigate = useNavigate();

    async function handleDetail(id) {
        const ContentDetail = await navigate(`/content/${id}`)
        return ContentDetail
    }
        
    return (
        <>
        <div className="section">
            <div>
                <div className="container">
                    <h3 className="title">{watchContent.Title}</h3>
                    <img className="poster" src={watchContent.Poster} alt={watchContent.Title} onClick={() => handleDetail(watchContent.imdbID)}/>
                    <div className="row">
                        <p className="info">({watchContent.Year}) · {watchContent.Type}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}