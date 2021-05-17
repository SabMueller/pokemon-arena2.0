import styled from 'styled-components/macro';
import { useState } from 'react';
import pokemonLogo from './images/pokemon-logo.svg';
import pokeball from './images/pokeball.svg';

export default function Home({ pokemon }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorites(pokemonFavorite) {
    console.log('pokemonFavorite', pokemonFavorite);
    const pokemonWithFavorites = pokemon.map((pokemon) => {
      if (pokemon.name === pokemonFavorite.name) {
        pokemon.isFavorite = !pokemon.isFavorite;
      }
      return pokemon;
    });
    console.log('pokemonWithFavorites', pokemonFavorite);
    setFavorites(pokemonWithFavorites);
    console.log(favorites);
  }

  return (
    <>
      <ImgWrapper>
        <img src={pokemonLogo} alt="Pokemon Logo" />
      </ImgWrapper>
      <HeadlineOne>Cards</HeadlineOne>
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
              <img src={pokeball} alt="Pokeball" width="30" />
            </ImgWrapper>
            <button onClick={() => toggleFavorites(pokemon)}>Click me</button>
          </PokemonCard>
        ))}
      </PokemonWrapper>
    </>
  );
}

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const HeadlineOne = styled.h1`
  font-family: 'Covered By Your Grace', cursive;
  display: grid;
  place-items: center;
  font-size: 4rem;
`;

const PokemonWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 2rem;

  background: rgb(236, 236, 236);
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
