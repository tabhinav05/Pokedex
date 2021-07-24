import React from 'react'

import './pokemonthumb.css';



const PokemonThumb = ({id, image, name, type, hp, attack, defense, specialAttack, specialDefense, speed }) => {


    const style = type + "  flip-card-inner";

    return (
        <div className="thumb-container">
            <div className={style}>
            <div className="flip-card-front" >
                {/* <p className="number" >#0{id}</p> */}
                <div className="img"><img src={image} alt={name} /></div>
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
            </div>
            <div className="flip-card-back">
                <h2>Stats:</h2>
                <ul className="stats">
                    <li><span><b>HP: </b></span>{hp}</li>
                    <li><span><b>Attack: </b></span>{attack}</li>
                    <li><span><b>Defense: </b></span> {defense}</li>
                    <li><span><b>Spcl Attack: </b></span>{specialAttack}</li>
                    <li><span><b>Spcl Defense: </b></span>{specialDefense}</li>
                    <li><span><b>Speed: </b></span>{speed}</li>
                </ul>
            </div>
            </div>
             
           
        </div>
    )
}

export default PokemonThumb