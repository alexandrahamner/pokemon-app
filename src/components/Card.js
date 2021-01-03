import React, {useState} from 'react';
import "./style.css";
import colorTypes from '../helpers/colorTypes'

//Destructor the prop
function Card({ pokemon, getFavPokemon}) {

    const [favButton, setFavButton] = useState("fav-icon heart outline icon big");

    const changeFavButton = (event) => {
        event.preventDefault();
        if(favButton === "fav-icon heart outline icon big") {
            setFavButton("unfav-icon heart outline icon big")
        } else if(favButton === "unfav-icon heart outline icon big") {
            setFavButton("fav-icon heart outline icon big")
        }
    }

    const savePokemon = (event) => {
        changeFavButton(event);
        localStorage.setItem(event.target.id , event.target.id);
        console.log(Object.entries(localStorage)[0][0]);
    }

    const removePokemon = (event) => {
        changeFavButton(event);
        localStorage.removeItem(event.target.id);
        getFavPokemon();
    }

    return (
        <div className="card">
            <div className="card-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>
            <div className="card-title">
                <div className="card-name">
                    {pokemon.name}
                </div>
                <div className="card-id">
                    #{pokemon.id}
                </div>
            </div>
            <hr />
            {/* <div className="card-info">
                <div className="card-data card-weight">
                    <p className="data-title">Weight: {(pokemon.weight)/10}kg</p>
                    <p className="data-title">Height: {(pokemon.height)/10}m</p>
                    <p className="data-title">Ability: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div> */}
            <div className="card-types">
                {pokemon.types.map((type,index) => {
                    return <div key={index} className="card-type" style={{ backgroundColor: colorTypes[type.type.name] }}>{type.type.name}</div>
                })}
            </div>
            <div className="favorite-button">
                {!localStorage.getItem(pokemon.name) ? 
                    (<div onClick={e => {savePokemon(e)}}> <i className="fav-icon heart icon big" id={pokemon.name} /></div>) :
                    (<div onClick={e => {removePokemon(e)}}> <i className="fav-icon heart icon big" id={pokemon.name} /></div>) 
                }
            </div>
            <div className="circle"></div>
        </div>
    )
}

export default Card;