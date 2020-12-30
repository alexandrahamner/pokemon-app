import React, { useState, useEffect } from 'react';
import {getPokemonList, getIndivPokemon} from './pokemonAPI';
import Card from "./Card";
import PokemonList from './PokemonList'
import Pagination from './Pagination';


function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    const [loading, setLoading] = useState(true);
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
    
    useEffect( () => {
        async function fetchData() {
            let response = await getPokemonList(pokemonUrl);
            setNextPage(response.next);
            setPrevPage(response.previous);
            await loadingPokemon(response.results);
            //stops showing loading animation when data is fetched
            setLoading(false);
        }

        fetchData();
    }, [])

    //Makes another call to the API to grab each pokemon's information.
    const loadingPokemon = async (data) => {
        //Takes in an array of promises and returns the array once all the promises are resolved
        let pokemonInfo = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getIndivPokemon(pokemon.url);
            return pokemonRecord;
        }))
        setPokemonData(pokemonInfo);
    }

    // Conditional for the loading animation
    // TODO: create an animation with pokeball.
    if(loading) return "Loading...";
   
    return (
        <div className="grid-container">
            {pokemonData.map( (pokemon, index) => {
                return <Card key={1} pokemon={pokemon} />
            })}
        </div>
        
    );
}

export default App;