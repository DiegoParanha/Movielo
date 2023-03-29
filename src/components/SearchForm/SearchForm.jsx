import {useState} from 'react';
import './SearchForm.css'

export default function SearchForm({handleSearch}) {
    const [searchItem, setSearchItem] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        handleSearch(searchItem);

    }

    function handleChange(evt) {
        setSearchItem(evt.target.value)
    }

    return (
        <div>
            <form className="searchForm" onSubmit={handleSubmit}>
                <input 
                    className="search"
                    type="text"
                    placeholder='Search any movies or series'
                    value={searchItem}
                    onChange={handleChange} 
                />
                <button className="submitbtn" type="submit">Search</button>
            </form>
        </div>
    )
}