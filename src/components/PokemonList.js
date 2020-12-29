import React from 'react';
import PokeCard from "./PokeCard";

const PokemonList = (props) => {
    const pokeCards = props.cards.map((card) => {
        return <PokeCard />
    })
    return <div className="poke-list">{pokeCards}</div>
}

export default PokemonList;