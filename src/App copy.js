import { useEffect, useState } from 'react';
/* import styled from 'styled-components'; */
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Arena from './Arena';
import Favorites from './Favorites';
import Home from './Home';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) =>
        setPokemon(
          data.results.map((item, index) => {
            item.id = index + 1;
            item.isFavorite = false;
            item.isHidden = false;
            return item;
          })
        )
      );
  }, []);

  return (
    <main className="App">
      <Navigation />
      <section>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/arena">
            <Arena pokemon={pokemon} />
          </Route>
          <Route exact path="/">
            <Home pokemon={pokemon} />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default App;
