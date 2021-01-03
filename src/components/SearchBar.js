import React, {useState} from 'react';

export default function SearchBar(props) {

    const [search, setSearch] = useState('');

    
    return (
    <div className="search-container ui top fixed menu small">
        <div className="header item">Pokemon App</div>
        <div className="ui icon button item" onClick={(e) => {e.preventDefault(); props.getFavPokemon()}} ><i className="filter-favs icon heart"></i></div>
        <button className="ui button item" onClick={(e) => {e.preventDefault(); props.showAllPokemon()}}>All</button>
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