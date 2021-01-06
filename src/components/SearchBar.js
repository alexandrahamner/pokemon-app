import React, {useState} from 'react';

export default function SearchBar(props) {

    const [search, setSearch] = useState('');

    return (
    <div className="search-container">
        <label></label>
        <input 
            className="search-input prompt"
            placeholder="Search For Pokemon"
            type="text"
            // value={}
            onChange={(e) => setSearch(e.target.value)}
        />
        <i onClick={(e) => {e.preventDefault(); props.getPokemon(search)}} className="search link icon"></i>
    </div>
    );
    
}