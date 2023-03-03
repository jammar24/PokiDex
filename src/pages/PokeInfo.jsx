import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  '../pages/styles/pokeInfo.css'


const PokeInfo = () => {

    const  {id} = useParams()
     const [poke, setPoke] = useState()
       const [hasError, setHasError] = useState(false);


  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPoke(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [id]);

  if (hasError) {
    return <h1>❌ The Pokemon with name "{id}" not found ❌</h1>;
  } else {
    return (
      <div  className='poke'>
        <section className="Poke__info">
          <div className="poke__card">
            <div
              className={`poke__image-p${poke?.types[0].type.name}`}
            >
              <img
                className="poke__img-t"
                src={poke?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>
            <div className="poke__container">
              <h2
                className={`poke__container-cl${poke?.types[0].type.name}`}
              >
                #{poke?.id}
              </h2>
            </div>
            <div className="poke__container">
              <h1
                className={`poke__container-nm ${poke?.types[0].type.name}`}
              >
                {poke?.name}
              </h1>
            </div>
            <div className="poke__item">
              <span className="poke__span">Weight</span>
              <span className="poke__span">Height</span>
              <span className="poke__value">
                {poke?.weight}
              </span>
              <span className="poke__value">
                {poke?.height}
              </span>
            </div>
            <div className="poke__as">
              <div className="poke__as-jr">
                <div className="poke__as-tps">
                  <h2 className="poke__as-tp">Type</h2>
                  {poke?.types.map((type) => (
                    <span
                      className={`poke__as-info ${type.type.name}`}
                      key={type.type.url}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="poke__may">
                  <h2 className="poke__may-p">Ability</h2>
                  {poke?.abilities.map((ability) => (
                    <span
                      className="poke__may-hb"
                      key={ability.ability.url}
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="poke__bxe">
                <h2 className="poke__bxa">Stats</h2>
              </div>
              <div className="pokeinfo__bxe">
                {poke?.stats.map((stat) => (
                  <div className="poke__sub">
                    <div className="poke__itm">
                      <span className="poke___stat">
                        {stat.stat.name}
                      </span>
                      <p className="poke__balance">
                        {stat.base_stat}/150
                      </p>
                    </div>
                    <div
                      className="poke__barra"
                      style={{
                        background: `linear-gradient(90deg, #e6601d 0, #f5d416 ${stat.base_stat}%, rgba(233,231,190,1) ${stat.base_stat}% 150%)`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="poke__bul">
            <div className="poke__h2-cont">
              <h2 className="poke__h2">Movements</h2>
            </div>
            <div className="poke__foot-principal">
              {poke?.moves.map((move) => (
                <h3 className="poke__foot">{move.move.name}</h3>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default PokeInfo;
