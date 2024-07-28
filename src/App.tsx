import { useEffect, useState } from 'react';
import './App.css';
import CardPokemon from './componets/CardPokemon';

type Props = {
  limit: number;
}

function App({ limit = 20 }: Props) {
  const [pokemons, setPokemons] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  useEffect(() => {
    const data = async () => {
      const response = await fetch(url);
      const pokemons = await response.json();
      setPokemons(pokemons.results);
    }
    data();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <div className='container'>
        {pokemons.map((pokemon, index) => (
          <CardPokemon key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}

export default App
