import React, {useState} from 'react';

export default function SearchBar(props) {

    const [search, setSearch] = useState('');

    
    return (
    <div className="search-container">
        <form>
            <div className="field ui icon input">
                <label></label>
                <input 
                    placeholder="Search For Pokemon"
                    type="text"
                    // value={}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <i onClick={(e) => {e.preventDefault(); props.getPokemon(search)}} className="inverted circular search link icon"></i>
            </div>
            <button className="ui icon button" onClick={(e) => {e.preventDefault(); props.getFavPokemon()}} ><i className="filter-favs icon heart"></i></button>
            <button className="ui button" onClick={(e) => window.location.reload}>All</button>
        </form>
        
    </div>
    );
    
}