import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import axios from 'axios';
import Pagination from './Pagination';


function App() {
    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let cancel;

        //sets our cancel variable to the new cancel token.
        axios.get(currentPage, {cancelToken: new axios.CancelToken(c => cancel = c)})
        .then(response => {
            setLoading(false);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
            setPokemon(response.data.results.map(pokemon => pokemon.name))
        })

        // this cancels any old requests when we make new requests
        return() => cancel();

    }, [currentPage])

    //Pagination: going to next and previous pages
    function goToNextPage() {
        setCurrentPage(nextPage);
    }

    function goToPreviousPage() {
        setCurrentPage(prevPage);
    }

    //TODO: Add a loading animation with a timeout
    if (loading) {
        return "Loading...";
    }
   
    return (
        <div>
            <PokemonList pokemon={pokemon} />
            <Pagination 
            goToNextPage={nextPage ? goToNextPage : null} 
            goToPreviousPage={prevPage ? goToPreviousPage : null} />
        </div>
        
    );
}

export default App;