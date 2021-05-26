import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { saveToLocal, loadFromLocal } from './lib/localStorage';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Arena from './pages/Arena';

function App() {
  const [pokemon, setPokemon] = useState(loadFromLocal('Pokemon') ?? []);
  const [favorites, setFavorites] = useState(
    loadFromLocal('favoritePokemon') ?? []
  );
  const [storage, setStorage] = useState([]);

  console.log('pokemon', pokemon);
  console.log('storage', storage);

  //___________________localStorage

  useEffect(() => {
    saveToLocal('favoritePokemon', favorites);
  }, [favorites]);

  useEffect(() => {
    saveToLocal('Pokemon', pokemon);
  }, [pokemon]);

  // erster useEffect: fetch Pokemon Infos
  useEffect(() => {
    initialPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    return data.results;
  }

  async function initialPokemon() {
    const pokemon = await fetchPokemon();
    const upgradedPokemon = await Promise.all(
      pokemon.map(async (pokemon, index) => {
        const type = await getType(pokemon.url);
        return {
          name: pokemon.name.toUpperCase(),
          type: type,
          isFavorite: false,
          isSelected: false,
          id: index + 1,
        };
      })
    );
    setPokemon(upgradedPokemon);
  }

  async function getType(pokemonURL) {
    const response = await fetch(pokemonURL);
    const data = await response.json();
    return data.types[0].type.name;
  }

  function filterTypes(type) {
    if (storage.length >= 1) {
      setStorage(storage);
      const pokemonFilter = storage.filter((pokemon) => pokemon.type === type);
      setPokemon(pokemonFilter);
    } else {
      const pokemonFilter = pokemon.filter((pokemon) => pokemon.type === type);
      setStorage(pokemon);
      setPokemon(pokemonFilter);
    }
  }

  function showAll() {
    if (storage.length < 1) {
      setStorage(pokemon);
    } else setPokemon(storage);
  }

  function toggleFavorites(pokemonFavorite) {
    const pokemonWithFavorites = pokemon.map((pokemon) => {
      if (pokemon.name === pokemonFavorite.name) {
        pokemon.isFavorite = !pokemon.isFavorite;
      }
      return pokemon;
    });
    setPokemon(pokemonWithFavorites);
    const favoritePokemon = pokemon.filter((pokemon) => pokemon.isFavorite);
    setFavorites(favoritePokemon);
  }

  return (
    <main className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home
            pokemon={pokemon}
            storage={storage}
            onShowAll={showAll}
            onFilterTypes={filterTypes}
            onToggleFavorites={toggleFavorites}
          />
        </Route>
        <Route path='/favorites'>
          <Favorites
            favorites={favorites}
            onToggleFavorites={toggleFavorites}
          />
        </Route>
        <Route path='/arena'>
          <Arena pokemon={pokemon} storage={storage} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
