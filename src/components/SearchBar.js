import React, {useState} from 'react';

export default function SearchBar(props) {

    const [search, setSearch] = useState('');
    return (
    <div>
        <form>
            <div className="field">
                <label></label>
                <input 
                    placeholder="Search For Pokemon"
                    type="text"
                    // value={}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={(e) => {e.preventDefault(); props.getPokemon(search)}} >Search</button>
            </div>
        </form>
    </div>
    );
    
}