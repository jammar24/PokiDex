import React, { useEffect, useState } from 'react'
import Poki from '/images/poki.png'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokeCard from '../components/Pokedex/PokeCard'
import '../pages/styles/pokedex.css'

const Pokedex = () => {
  const {nameTrainer} = useSelector(state => state)
  const [pokemons, setPokemons] = useState()
  const [pokeType, setPokeType] = useState()


  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
  axios.get(url)
  .then(res => setPokemons(res.data))
  .catch (err => console.log (err))
    
  }, [])

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type/'
    axios.get(url)
        .then(res => setPokeType(res.data))
        .catch(err => console.log(err))
}, [])
  



  return (
<div className='pokedex'>
  <div className='pokedex__cont'>
<header className='pokedex__title'>
  <img className='pokedex__img' src={Poki} alt="" />
</header>  
<h1 className='pokedex__h1'><span className='pokedex__name'> Hi {nameTrainer}</span>, here find your favorite pokemon.</h1>
<div>
<div className='form'>
                <form className='form__principal'>
                    <input id="form__pokedex" type="text" placeholder='search pokemon' />
                    <button id="form__pokedex-btn">Search</button>
                </form>
                <select className='form__pokedex-select' name="" id="">
                    <option className='form__select-option' value="allpokemon">All Pokemon</option>
                    {
                        pokeType?.results.map(type => (
                            <option value={type.url} key={type.url}>{type.name}</option>
                        ))
                    }
                </select>
                </div>
            </div>
  {
    pokemons?.results.map(pokemon => (
  <PokeCard
  key={pokemon.url} 
  pokemon={pokemon} />
    ))
  }
</div>
</div>
)
}

export default Pokedex