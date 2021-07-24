import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import Randomcard from '../../components/random-card/random-card';
import Pokeball from "../../assets/123.png";

import './random.css';

const Random = () => {
  const [RandomPokemon,setRandomPokemon] = useState('');

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      const getRandomPokemon = async (id) => {
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
          const res = await fetch(url);
          const pokemon = await res.json();
          setRandomPokemon(pokemon);
          console.log(pokemon);
        } catch (err) {
          console.log(err);
        }
      };
      
      function giveRandomPokemon() {
        getRandomPokemon(getRandomInt(649));
      }




    return (
        <div className="app-contaner">
        
         <Link to="/mainpage" className="link">
         <h1><img className="Pokeball" src={Pokeball}  alt=""/>PokeDex<img className="Pokeball" src={Pokeball} alt="" /></h1>
         </Link>
      
        
          <div className="frame">
            <div className="frame-poke">
            {(RandomPokemon === '')?<div className="frame-text"><h2>Click the button below to Generate New Pokemon card</h2></div>: <Randomcard
            key={RandomPokemon.index}
            image={RandomPokemon.sprites.other.dream_world.front_default}
            name={RandomPokemon.name}
            type={RandomPokemon.types[0].type.name}
            hp={RandomPokemon.stats[0].base_stat}
            attack={RandomPokemon.stats[1].base_stat}
            defense={RandomPokemon.stats[2].base_stat}
            specialAttack={RandomPokemon.stats[3].base_stat}
            specialDefense={RandomPokemon.stats[4].base_stat}
            speed={RandomPokemon.stats[5].base_stat}

          />}
            </div>
          
          </div>
          <button className="generator" onClick={giveRandomPokemon}>Generate Pokemon</button>
           </div>
    )
}

export default Random
