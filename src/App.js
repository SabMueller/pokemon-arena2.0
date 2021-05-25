import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Route, Switch } from 'react-router-dom';
import { saveToLocal, loadFromLocal } from './lib/localStorage';
import Navigation from './Navigation';
import Arena from './Arena';
import pokemonLogo from './images/pokemon-logo.svg';
import pokeball from './images/pokeball.svg';
import bugIcon from './images/Pokémon_Bug_Type_Icon.svg';
import fireIcon from './images/Pokémon_Fire_Type_Icon.svg';
import psychicIcon from './images/Pokémon_Psychic_Type_Icon.svg';
import dragonIcon from './images/Pokémon_Dragon_Type_Icon.svg';
import electricIcon from './images/Pokémon_Electric_Type_Icon.svg';
import fightingIcon from './images/Pokémon_Fighting_Type_Icon.svg';
import ghostIcon from './images/Pokémon_Ghost_Type_Icon.svg';
import grassIcon from './images/Pokémon_Grass_Type_Icon.svg';
import groundIcon from './images/Pokémon_Ground_Type_Icon.svg';
import iceIcon from './images/Pokémon_Ice_Type_Icon.svg';
import normalIcon from './images/Pokémon_Normal_Type_Icon.svg';
import poisonIcon from './images/Pokémon_Poison_Type_Icon.svg';
import rockIcon from './images/Pokémon_Rock_Type_Icon.svg';
import waterIcon from './images/Pokémon_Water_Type_Icon.svg';

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
      setPokemon(storage);
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
                      style={
                        pokemon.isFavorite
                          ? {
                              opacity: '100%',
                              transition: 'all 0.4s ease-in',
                              transform: 'scale(1.5)',
                            }
                          : { opacity: '25%', transition: 'all 0.5s ease-out' }
                      }
                    />
                  </ImgWrapper>
                </PokemonCard>
              ))}
            </PokemonWrapper>
          </Route>
          <Route path="/arena">
            <Arena pokemon={pokemon} storage={storage} />
          </Route>
          <Route exact path="/">
            <ImgWrapper>
              <img src={pokemonLogo} alt="Pokemon Logo" />
            </ImgWrapper>
            <HeadlineOne>First Generation</HeadlineOne>
            <FilterWrapper>
              <ButtonWrapper>
                <Button onClick={showAll}>SHOW ALL POKEMON</Button>
              </ButtonWrapper>
              <IconWrapper>
                <IconImage
                  src={bugIcon}
                  alt="Bug Type Icon"
                  width="50"
                  onClick={() => filterTypes('bug')}
                />
                <IconImage
                  src={fireIcon}
                  alt="Fire Type Icon"
                  width="50"
                  onClick={() => filterTypes('fire')}
                />
                <IconImage
                  src={psychicIcon}
                  alt="Psychic Type Icon"
                  width="50"
                  onClick={() => filterTypes('psychic')}
                />
                <IconImage
                  src={dragonIcon}
                  alt="Dragon Type Icon"
                  width="50"
                  onClick={() => filterTypes('dragon')}
                />
                <IconImage
                  src={electricIcon}
                  alt="Electric Type Icon"
                  width="50"
                  onClick={() => filterTypes('electric')}
                />
                <IconImage
                  src={fightingIcon}
                  alt="Fighting Type Icon"
                  width="50"
                  onClick={() => filterTypes('fighting')}
                />
                <IconImage
                  src={ghostIcon}
                  alt="Ghost Type Icon"
                  width="50"
                  onClick={() => filterTypes('ghost')}
                />

                <IconImage
                  src={grassIcon}
                  alt="Grass Type Icon"
                  width="50"
                  onClick={() => filterTypes('grass')}
                />
                <IconImage
                  src={groundIcon}
                  alt="Ground Type Icon"
                  width="50"
                  onClick={() => filterTypes('ground')}
                />
                <IconImage
                  src={iceIcon}
                  alt="Ice Type Icon"
                  width="50"
                  onClick={() => filterTypes('ice')}
                />
                <IconImage
                  src={normalIcon}
                  alt="Normal Type Icon"
                  width="50"
                  onClick={() => filterTypes('normal')}
                />
                <IconImage
                  src={poisonIcon}
                  alt="Poison Type Icon"
                  width="50"
                  onClick={() => filterTypes('poison')}
                />
                <IconImage
                  src={rockIcon}
                  alt="Rock Type Icon"
                  width="50"
                  onClick={() => filterTypes('rock')}
                />
                <IconImage
                  src={waterIcon}
                  alt="Water Type Icon"
                  width="50"
                  onClick={() => filterTypes('water')}
                />
              </IconWrapper>
            </FilterWrapper>
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
                              transition: 'all 0.4s ease-in',
                              transform: 'scale(1.5)',
                            }
                          : { opacity: '25%', transition: 'all 0.5s ease-out' }
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

const FilterWrapper = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

const ButtonWrapper = styled.div`
  justify-self: center;
`;

const Button = styled.button`
  background-color: var(--yellow);
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2rem;
  padding: 1rem;
  border-radius: 100vw;
  border: var(--dark-blue);
`;

const IconWrapper = styled.div`
  justify-self: center;
`;

const IconImage = styled.img`
  cursor: pointer;
  margin: 0 0.2rem;
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
  margin: 0 auto 2rem auto;
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
  border-radius: 10%;
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
