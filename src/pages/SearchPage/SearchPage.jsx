import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as contentsAPI from '../../utilities/content-api'
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchPageList from '../../components/SearchPageList/SearchPageList';

export default function SearchPage(props) {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    async function handleSearch (searchItem) {
        const results = await contentsAPI.getSearch(searchItem);
        setSearchResults(results)  
    }

    async function handleDetail(id) {
        const ContentDetail = await navigate(`/content/${id}`)
        return ContentDetail
    }

    const SearchResultsMap = searchResults.map((result, idx) => (
        <SearchPageList results={result} idx={idx} handleDetail={handleDetail} />
    ))

    
    return (
        <>
        <div>
            <h1>Search Movies or Shows</h1>
            <SearchForm handleSearch={handleSearch}/>
        </div>
            <h1 className='heading'>Content</h1>
            <div className='section'>{SearchResultsMap}</div>

        </>
    )

}
