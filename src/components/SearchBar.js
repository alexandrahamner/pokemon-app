import React, {useState} from 'react';

export default function SearchBar(props) {

    const [search, setSearch] = useState('');

    
    return (
    <div className="search-container ui top fixed menu mini">
        <div className="item">Pokemon App</div>
        <p className="ui icon button item" onClick={(e) => {e.preventDefault(); props.getFavPokemon()}} ><i className="filter-favs icon heart"></i></p>
        <p className="ui button item" onClick={(e) => window.location.reload}>All</p>
        <div className="right menu">
            <div className="item">
                <div className="field ui icon input">
                    <label></label>
                    <input 
                        placeholder="Search For Pokemon"
                        type="text"
                        // value={}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <i onClick={(e) => {e.preventDefault(); props.getPokemon(search)}} className="search link icon"></i>
                </div>
        </div>
        </div>
    </div>
    );
    
}