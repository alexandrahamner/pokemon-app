import React from 'react';

export default function NavigationBar(props) { 
    return (
    <div className="ui top fixed menu small">
        <div className="header item">Pokemon App</div>
        <div className="ui icon button item" onClick={(e) => {e.preventDefault(); props.getFavPokemon()}} ><i className="filter-favs icon heart"></i></div>
        <button className="ui button item" onClick={(e) => {e.preventDefault(); props.showAllPokemon()}}>All</button>
    </div>
    );
    
}