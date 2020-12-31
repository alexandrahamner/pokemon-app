import React, { useState, useEffect } from 'react';
import {getPokemonList, getIndivPokemon} from '../services/pokemonAPI';
import Card from "./Card";
import SearchBar from './SearchBar';


function App() {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemonData, setPokemonData] = useState([]);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    
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

    const getPokemon = async (term) => {
        if (!term) {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
          }
        setError(false);
        setLoading(true);
        try {
            setLoading(true);
            const response = await fetch(pokemonUrl + term)
            const results = await response.json();
            console.log(results);
            setPokemonData([results]);
            setLoading(false);
        } 
        catch (err) {
            console.log(err);
            setLoading(false);
            setErrorMsg('Pokemon Not Found.')
            setError(true);
        }
        
    }

    const next = async () => {
        setLoading(true);
        let data = await getPokemonList(nextPage);
        await loadingPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if(!prevPage) return;
        setLoading(true);
        let data = await getPokemonList(prevPage);
        await loadingPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setLoading(false);
    }

    // Conditional for the loading animation
    // TODO: create an animation with pokeball.
    if(loading) return "Loading...";
   
    return (
        <div>
            {error ? (<p>{errorMsg}</p>): null}
            <SearchBar getPokemon={getPokemon}/>
            <div className="grid-container">
              {pokemonData.map((pokemon, index) => {
                return <Card key={index} pokemon={pokemon} />
              })}
            </div>
            <div className="btn">
                { prevPage ? (<button onClick={prev}>Previous</button>) : null}
                <button onClick={next}>Next</button>
            </div>
        </div>
        
        
    );
}

export default App;