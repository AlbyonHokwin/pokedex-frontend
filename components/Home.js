import styles from '../styles/Home.module.css';
import Card from './Card';
import { useState, useEffect } from 'react';

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const lastId = pokemonData.length;
  const stepId = 15;

  const fetchPikachu = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();
    return data;
  };

  const fetchPokemons = async (fromId) => {
    const pokemons = [];

    if (!pokemonData[0]) {
      const pikachuData = await fetchPikachu();
      pokemons.push(pikachuData);
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${fromId}&limit=${stepId}`);
    const data = await response.json();

    for (let result of data.results) {
      let pokeResponse = await fetch(result.url)
      let pokeData = await pokeResponse.json();
      pokemons.push(pokeData);
    }

    setPokemonData([...pokemonData, ...pokemons]);
  };

  const clickNext = () => {
    fetchPokemons(lastId);
  }

  useEffect(() => {
    fetchPokemons(lastId);
  }, [])

  const pokemons = pokemonData.map((pokemon, i) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1).toLowerCase();
    const type = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.front_default;

    return (<Card
      key={i}
      name={name}
      type={type}
      sprite={sprite}
    />);
  })

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Pokedex</h1>

      <div id="pokemonContainer" className={styles.pokemonContainer}>
        {pokemons}
      </div>

      <button id="next" className={styles.next} onClick={() => clickNext()}>Next</button>

    </div>
  );
}

export default Home;
