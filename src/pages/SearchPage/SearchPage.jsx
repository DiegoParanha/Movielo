import {useState} from 'react';

export default function SearchPage() {
    const [search, setSearch] = useState("");

    // const handleSearch() {
        
    // }
    return (
        <input 
            type="text" 
            placeholder="Enter Movie or Series"
            value=""
            name='s'
            required
        /> 
    )

}