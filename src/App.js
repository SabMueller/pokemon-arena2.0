import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
      .then((data) => setPokemon(data.results));
  }, []);

  return (
    <body className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/arena">
            <Arena />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </body>
  );
}

export default App;
