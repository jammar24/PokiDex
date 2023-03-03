import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../pages/styles/pokecard.css'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({pokemon}) => {

    const [poke, setPoke] = useState()

 const navigate = useNavigate()

    useEffect(() => {
    axios.get (pokemon.url)
    .then(res => setPoke(res.data))
    .catch(err => console.log(err))
    }, [])

    console.log(poke?.types);

    const handleClick = () => {
    navigate(`/pokedex/${poke.id}` )
    }

  return (
  
    <div className='card' >
    <article onClick={handleClick} className={`card__container${poke?.types[0].type.name}`} >
        <header className={`card__header ${poke?.types[0].type.name}1`}>
           <img  className='card__img' src={poke?.sprites.other["official-artwork"].front_default} alt="" /> 
        </header>
        <h2 className='card__name'>{poke?.name}</h2>
        <ul className='card__type'>
        {
           poke?.types.map( type =>(
           <li  key={ type.type.name }> {type.type.name } </li>
           ))   
        }
       </ul>
       <hr/>
       <ul className='card__type-list'>
        {
          poke?.stats.map(stat =>(
            <li key={stat.stat.url}> 
                <span>{stat.stat.name} : </span>
                <span>{stat.base_stat}</span>
            </li>
          ))
        }
       </ul>
    </article>
    </div>
  
  )
}

export default PokeCard