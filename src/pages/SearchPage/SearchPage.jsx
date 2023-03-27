import {useState} from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import ContentList from '../ContentList/ContentList';

export default function SearchPage({content}) {
    const [search, setSearch] = useState("");

    const handleSearch = async () => {

        
    }

    return (
        <>
            <input 
                className='SearchBar'
                type="text" 
                placeholder="Enter Movie or Series"
                value={search.value}
                onChange={(event) => setSearch(event.target.value)}
                name='s'
                required
                /> 
            <h1 className='heading'>Content</h1>
            <ContentList />
        </>
    )

}