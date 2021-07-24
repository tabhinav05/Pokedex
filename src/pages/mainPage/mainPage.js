import React, { useEffect, useState } from 'react'
import PokemonThumb from '../../components/pokemonthumb/pokemonthumb';
import {Link} from 'react-router-dom';
import Pokeball from "../../assets/123.png";


import './mainPage.css';

const MainPage = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
   const [q, setQ] = useState("");
   const [sortType, setSort] = useState("");
   const [ProfileData, setProfileData] = useState('')
    
   



  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    const createPokemonObject = (results) =>  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await console.log(allPokemons)

      })
    }
    createPokemonObject(data.results)
    
   
  }

 useEffect(() => {
  getAllPokemons();
 }, []);

 const sorted = allPokemons.sort((a,b) =>{
  const isReversed  = 
  (sortType === 'asc') ? 1: (sortType === 'dsc')? -1: 0;
  return isReversed * a.name.localeCompare(b.name)
})




 const search = (allPokemons) =>{
  return allPokemons.filter((pokemon) => pokemon.name.toLowerCase().indexOf(q.toLowerCase()) > -1)
  
}

const getData = () => {
  let data = sessionStorage.getItem('profileData');
  data = JSON.parse(data);
  console.log(data);
  setProfileData(data); 
}

useEffect(() => {
 getData();
}, [])
 

  return (
    <div className="app-contaner">
      <div className='nav' >
      <h1><img className="Pokeball" src={Pokeball}  alt=""/>PokeDex<img className="Pokeball" src={Pokeball} alt="" /></h1>
      
        <div className="nav2">
        <input
        className='search-box'
        type='text'
        value ={q} onChange={(e) => setQ(e.target.value)}
        placeholder='Search'
        
        />
        <i className=" fa fa-search search-icon" aria-hidden="true" />
        
        <div className="filter">
               <select onChange={(e) =>{
                 const selectedSort = e.target.value;
                 setSort(selectedSort);
               }} >
                <option >FILTER</option>
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>
                </select>
        </div>
                <Link to="/random" ><button className="random-btn">Pokemon Generator</button></Link>
                <button className="profile">{ProfileData.PokeWorldName}</button>
        </div>
           
    </div>
    
    
    <div className="pokemon-container">
      <div className="all-container">
        {search(sorted).map( (pokemonStats, index) => 
          <PokemonThumb
            key={index}
            // id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
            hp={pokemonStats.stats[0].base_stat}
            attack={pokemonStats.stats[1].base_stat}
            defense={pokemonStats.stats[2].base_stat}
            specialAttack={pokemonStats.stats[3].base_stat}
            specialDefense={pokemonStats.stats[4].base_stat}
            speed={pokemonStats.stats[5].base_stat}

          />)}
        
      </div>
        <button className="load-more" onClick={() => getAllPokemons() }><b>Load more</b></button>
    </div>
  </div>
  );
}

export default MainPage;