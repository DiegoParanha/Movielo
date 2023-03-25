import {useState} from 'react';

export default function SearchPage() {
    const [search, setSearch] = useState("");

    return (
        <input 
        type="text" 
        placeholder="Enter movie or series name"
        value
        name='s'
        /> 
    )

}