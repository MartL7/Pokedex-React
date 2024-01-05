import { useEffect, useState } from 'react'
import './App.css'

export function App() {

  const API_Pokemon = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(API_Pokemon + "1");
      const data = await response.json();
      setPokemonList([data]);

      for (let i = 2; i <= 151; i++) {
        const response = await fetch(API_Pokemon + i);
        const data = await response.json();
        setPokemonList(prevList => [...prevList, data]);
      }
    };

    fetchPokemon();
  }, [])

  const typePokemonClass = {
    water: 'water',
    grass: 'grass',
    poison: 'poison',
    bug: 'bug',
    electric: 'electric',
    normal: 'normal',
    fairy: 'fairy',
    fighting: 'fighting',
    psychic: 'psychic',
  };

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <div key={index} className="col-12 offset-1 offset-md-0 col-md-4 my-2">
          <div className="card text-center rounded-5" style={{ width: '18rem' }}>
            <img src={pokemon.sprites.front_default} id="imagePokemon" className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
              <h5 className="card-title fw-bold">{pokemon.name.toUpperCase()}</h5>
              <p className="card-text"></p>
              <div className="Container-Button-types">
                <button className={`Button-type ${typePokemonClass[pokemon.types[0].type.name]}`}>{pokemon.types[0].type.name}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

