import React from 'react';

//Destructor the pokemon array where the props would normally go. Makes it easier.
export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(indivPokemon => (
                //keys are required for loops. using the pokemon's name as the key.
                <div key={indivPokemon}>{indivPokemon}</div>
            ))}
        </div>
    );
}