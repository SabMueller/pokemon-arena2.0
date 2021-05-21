import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Arena from './Arena';
import pokemonLogo from './images/pokemon-logo.svg';
import pokeball from './images/pokeball.svg';

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [arcani, setArcani] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  //console.log('feuer', pokemonTypes);
  // console.log('light my', arcani);
  console.log('einer is fire?', pokemonTypes);
  console.log('alle fire?', pokemon);
  //const merkel = 'kanzlerin';

  //pokemon[58] >>> arcani

  // index 58 ist arcanine
  //console.log('alle pokemon', pokemon[58]);
  //console.log('ein pokemon', pokemon[0].url);

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

  const pokemonIndex = 59;

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + 1)
      .then((result) => result.json())
      .then((data) => {
        const pokemonWithType = pokemon.map((item, index) => {
          item.id = index + 1;
          item.type = data.types[0].type.name;
          return item;
        });
        setPokemonTypes(pokemonWithType);
      });
  }, []);

  useEffect(() => {
    const allPokemonWithTheirType = pokemon.map((pokemon) => {
      const pokemonWithType = pokemonTypes.find(
        (pokemonWithType) => pokemonWithType.id === pokemon.id
      );
      pokemon.type = pokemonWithType ? pokemonWithType.type : 'currywurst';
      return pokemon;
    });
    console.log(allPokemonWithTheirType, 'all of them');
    setPokemon(allPokemonWithTheirType);
  }, [pokemonTypes]);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonCurry)
  //     .then((result) => result.json())
  //     .then((data) => data.types.map((currywurst) => {console.log('geht das?', currywurst.type.name)})
  // }, []);
  // pokemon.map((item, index) => )
  // const pokemonIndex = index + 1;
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonIndex)
  //     .then((result) => result.json())
  //     .then((data) => setPokemonTypes(data.types[0].type.name));
  // }, [pokemon]);

  // fire = data.types[0].type.name

  function toggleFavorites(pokemonFavorite) {
    const pokemonWithFavorites = pokemon.map((pokemon) => {
      if (pokemon.name === pokemonFavorite.name) {
        pokemon.isFavorite = !pokemon.isFavorite;
      }
      return pokemon;
    });
    setPokemon(pokemonWithFavorites);
    const favoritePokemon = pokemon.filter((pokemon) => pokemon.isFavorite);
    console.log(pokemon);
    setFavorites(favoritePokemon);
  }

  return (
    <main className="App">
      <Navigation />
      <section>
        <Switch>
          <Route path="/favorites">
            <ImgWrapper>
              <img src={pokemonLogo} alt="Pokemon Logo" />
            </ImgWrapper>
            <HeadlineOne>My Favorites</HeadlineOne>
            <PokemonWrapper>
              {favorites.map((pokemon, index) => (
                <PokemonCard key={index}>
                  <h3>
                    #{pokemon.id} {` `}
                    {pokemon.name.toUpperCase()}
                  </h3>
                  <img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                    alt="Pokemon Profile"
                    width="150"
                  />
                  <ImgWrapper>
                    <Img
                      onClick={() => toggleFavorites(pokemon)}
                      src={pokeball}
                      alt="Pokeball"
                      width="30"
                    />
                  </ImgWrapper>
                </PokemonCard>
              ))}
            </PokemonWrapper>
          </Route>
          <Route path="/arena">
            <Arena pokemon={pokemon} />
          </Route>
          <Route exact path="/">
            <ImgWrapper>
              <img src={pokemonLogo} alt="Pokemon Logo" />
            </ImgWrapper>
            <HeadlineOne>First Generation</HeadlineOne>
            <PokemonWrapper>
              {pokemon.map((pokemon, index) => (
                <PokemonCard key={index}>
                  <h3>
                    #{pokemon.id} {` `}
                    {pokemon.name.toUpperCase()}
                  </h3>
                  <img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                    alt="Pokemon Profile"
                    width="150"
                  />
                  <ImgWrapper>
                    <Img
                      onClick={() => toggleFavorites(pokemon)}
                      src={pokeball}
                      alt="Pokeball"
                      width="30"
                    />
                  </ImgWrapper>
                </PokemonCard>
              ))}
            </PokemonWrapper>
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default App;

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const HeadlineOne = styled.h1`
  /*   font-family: 'Covered By Your Grace', cursive; */
  font-family: 'Bangers', cursive;
  display: grid;
  place-items: center;
  font-size: 4rem;
  color: var(--red);
  text-shadow: 1px 1px 1px black;
  letter-spacing: 0.1rem;
`;

const PokemonWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 2rem;

  background: rgba(236, 236, 236, 0.637);
  border: 1px solid hsl(210, 15%, 89%);
  border-radius: 2rem;
  filter: drop-shadow(0 2px 0.75rem hsla(213, 53%, 20%, 0.308));
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  width: 80%;
`;

const PokemonCard = styled.article`
  background-image: linear-gradient(
    to top,
    #505285 0%,
    #585e92 12%,
    #65689f 25%,
    #7474b0 37%,
    #7e7ebb 50%,
    #8389c7 62%,
    #9795d4 75%,
    #a2a1dc 87%,
    #b5aee4 100%
  );
  min-width: 20vw;
  border-radius: 15%;
  padding: 1rem;
  color: white;
  text-shadow: 1px 1px 0 black;
  font-family: sans-serif;
  box-shadow: 1px 1px 3px black;
`;

const Img = styled.img`
  /*   opacity: ${(props) => (props.isFavorite ? '100%' : '25%')}; */
  opacity: 25%;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`;
