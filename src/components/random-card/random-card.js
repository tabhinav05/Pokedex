import React from 'react';
import './random-card.css';

const Randomcard = ({image, name, type, hp, attack, defense, specialAttack, specialDefense, speed }) => {

    const style = type + " random-card";
    return (
            <div className={style}>
                <div className="random-img"><img src={image} alt={name} /></div>
                <div className="detail">
                    <h1>{name.toUpperCase()}</h1>
                    <small><b>Type: {type.toLocaleUpperCase()}</b></small>
                </div>
                <ul className="random-poke-stats">
                    <li><span><b>HP: </b></span>{hp}</li>
                    <li><span><b>Attack: </b></span>{attack}</li>
                    <li><span><b>Defense: </b></span> {defense}</li>
                    <li><span><b>Spcl Attack: </b></span>{specialAttack}</li>
                    <li><span><b>Spcl Defense: </b></span>{specialDefense}</li>
                    <li><span><b>Speed: </b></span>{speed}</li>
                </ul>
            </div>       
    )
}
export default Randomcard;
