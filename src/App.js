import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Arena from './Arena';
import pokemonLogo from './images/pokemon-logo.svg';
import pokeball from './images/pokeball.svg';
import bugIcon from './images/Pokémon_Bug_Type_Icon.svg';
import fireIcon from './images/Pokémon_Fire_Type_Icon.svg';
import psychicIcon from './images/Pokémon_Psychic_Type_Icon.svg';
import { saveToLocal, loadFromLocal } from './lib/localStorage';

function App() {
  const [pokemon, setPokemon] = useState(loadFromLocal('Pokemon') ?? []);
  const [favorites, setFavorites] = useState(
    loadFromLocal('favoritePokemon') ?? []
  );
  const [pokemonTypes, setPokemonTypes] = useState([]);
  /*   console.log('1 type:', pokemonTypes[0]);
  console.log('1 pokemon:', pokemon[0]);
  console.log('all types:', pokemonTypes);
  console.log('all pokemon:', pokemon); */

  //___________________localStorage

  useEffect(() => {
    saveToLocal('favoritePokemon', favorites);
  }, [favorites]);

  useEffect(() => {
    saveToLocal('Pokemon', pokemon);
  }, [pokemon]);

  // erster useEffect: fetch Pokemon Infos bis auf Type

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((result) => result.json())
      .then((data) =>
        setPokemon(
          data.results.map((item, index) => {
            item.id = index + 1;
            item.isFavorite = false;
            item.isSelected = false;
            return item;
          })
        )
      );
  }, []);

  // zweiter useEffect: fetch Pokemon Types

  useEffect(() => {
    for (let i = 1; i < 152; i++) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        .then((result) => result.json())
        .then((data) => {
          const currywurst = {
            id: i,
            type: data.types[0].type.name,
          };

          pokemonTypes.push(currywurst);
          // hier geht push und nicht setPokemonTypes whyyyyyyyyyyyyyyyyyy
        });
    }
  }, []);

  // dritter useEffect: Vergleich IDs aller Pokemon mit allen Typen >>> wenn übereinstimmt soll Pokemon den entsprechenden Typ bekommen

  useEffect(() => {
    const allPokemonWithTheirType = pokemon.map((pokemon) => {
      const entsprechendeID = pokemonTypes.find(
        (currywurst) => currywurst.id === pokemon.id
      );
      pokemon.type = entsprechendeID ? entsprechendeID.type : 'currywurst';
      return pokemon;
    });
    console.log(allPokemonWithTheirType, 'all of them');
    setPokemon(allPokemonWithTheirType);
  }, [pokemonTypes]);

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
            <Arena pokemon={pokemon} onSetPokemon={setPokemon} />
          </Route>
          <Route exact path="/">
            <ImgWrapper>
              <img src={pokemonLogo} alt="Pokemon Logo" />
            </ImgWrapper>
            <HeadlineOne>First Generation</HeadlineOne>
            <IconWrapper>
              <img src={bugIcon} alt="Bug Type Icon" width="50" />
              <img src={fireIcon} alt="Fire Type Icon" width="50" />
              <img src={psychicIcon} alt="Psychic Type Icon" width="50" />
            </IconWrapper>
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
                      style={
                        pokemon.isFavorite
                          ? {
                              opacity: '100%',
                              transition: '0.8s ease-in',
                              transform: 'scale(1.5)',
                            }
                          : { opacity: '25%', transition: '0.5s ease-out' }
                      }
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  cursor: pointer;

  &:hover {
    opacity: 100% !important;
  }
`;
