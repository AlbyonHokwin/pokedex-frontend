import styles from '../styles/Home.module.css';
import Card from './Card';
import BigCard from './BigCard';
import { useState, useEffect } from 'react';
import { deleteMany } from '../../backend/models/pokemons';

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [bigCard, setBigCard] = useState(null);
  const lastId = pokemonData.length;
  const stepId = 15;

  const fetchPokemons = async (fromId) => {
    const response = await fetch(`http://localhost:3000/pokemons?fromId=${fromId}&toId=${fromId+stepId-1}`);
    const data = await response.json();

    data.result && setPokemonData([...pokemonData, ...data.pokemons]);
  };

  const fetchAllPokemons = async () => {
    const response = await fetch(`http://localhost:3000/pokemons`);
    const data = await response.json();

    data.result && setPokemonData([...pokemonData, ...data.pokemons]);
  };

  const clickNext = () => {
    fetchPokemons(lastId + 1);
  }

  useEffect(() => {
    fetchAllPokemons();
  }, [])


  const displayBigCard = (data) => {
    setBigCard(<BigCard {...data} hideBigCard={hideBigCard} />);
  }

  const hideBigCard = () => {
    setBigCard(null);
  }

  const pokemons = pokemonData.map((pokemon, i) => {
    return (<Card key={pokemon._id} displayBigCard={displayBigCard} {...pokemon} />);
  })

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Pokedex</h1>

      {bigCard}

      <div id="pokemonContainer" className={styles.pokemonContainer}>
        {pokemons}
      </div>

      {/* <button id="next" className={styles.next} onClick={() => clickNext()}>Next</button> */}

    </div>
  );
}

export default Home;
