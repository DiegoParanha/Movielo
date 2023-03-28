import {useState} from 'react';

export default function SearchForm({handleSearch}) {
    const [searchItem, setSearchItem] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();
        handleSearch(searchItem);

    }

    function handleChange(evt) {
        setSearchItem(evt.taget.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Search any movies or series'
                value={searchItem}
                onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}