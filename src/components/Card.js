import React from 'react';

//Destructor the prop
function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>
            <div className="card-name">
                {pokemon.name}
            </div>
            <div className="card-types">
                {pokemon.types.map((type,index) => {
                    return <div key={index} className="card-type">{type.name}</div>
                })}
            </div>
            <div className="card-info">
                <div className="card-data card-weight">
                    <p className="data-title">Weight: {(pokemon.weight)/10}kg</p>
                    <p className="data-title">Height: {(pokemon.height)/10}m</p>
                    <p className="data-title">Ability: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;