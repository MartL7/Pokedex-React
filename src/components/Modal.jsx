import React, { useState } from 'react';
import { Send, SearchPokemon } from '../logic/Send.js';
import { FindedPokemon } from './Finded.jsx';

export const Modal = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearchClick = async () => {
    const Active = true;
    const { pokemonNames, infoPokemon } = await Send();
    SearchPokemon(pokemonNames, infoPokemon, Active, setPokemonData);
  };

  return (
      <>
      <header>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand"> Pokedex </a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar Pokemon" aria-label="Search" id="searchInput" />
                <a className="btn btn-outline-success" onClick={handleSearchClick}> Buscar </a>
              </form>
            </div>
          </nav>
        </header>
        {pokemonData && <FindedPokemon data={pokemonData} onClose={() => setPokemonData(null)} />}
      </>
  );
};
