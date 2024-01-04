import Swal from 'sweetalert2'

const Send = async () => {
    const API_Pokemon = "https://pokeapi.co/api/v2/pokemon/";
  
    const pokemonNames = [];
    const infoPokemon = [];
    const fetchPromises = [];
  
    for (let i = 1; i <= 151; i++) {
      const fetchPromise = fetch(API_Pokemon + i)
        .then((res) => res.json())
        .then((data) => {
          pokemonNames.push(data.name);
          infoPokemon.push(data);
        });
  
      fetchPromises.push(fetchPromise);
    }
  
    await Promise.all(fetchPromises);
  
    return { pokemonNames, infoPokemon };
};
  
const SearchPokemon = (names, data, Active, setPokemonData) => {
    const valueInputSearch = document.getElementById('searchInput').value;
  
    const nameFind = names.find((element) => element === valueInputSearch.toLowerCase());
  
    if (nameFind !== undefined) {
      const findIndex = names.indexOf(nameFind);
      const foundPokemonData = data[findIndex];
      setPokemonData(foundPokemonData);
      Active = true;
    } else {
        Swal.fire({
            title: "Advertencia",
            html: '<span class="text-secondary"> Ups!! Pokemon no encontrado </span>',
            icon: "warning",
            confirmButtonText: "Volver",
            footer:
            '<span class="text-secondary"> Verifica tu busqueda:( </span>',
            allowOutsideClick: false,
            buttonsStyling: false,
            customClass: {
                popup: "bg-dark rounded-5",
                confirmButton: "Button"
            },
        })
    }
};
  
  export { Send, SearchPokemon };
  
