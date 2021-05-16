import { useEffect, useState } from 'react';
import styled from 'styled-components';
import pokemonLogo from './images/pokemon-logo.svg';
import pokeball from './images/pokeball.svg';

export default function Favorites({ favorites }) {
  /*const [newFavorites, setNewFavorites] = useState(favorites);
  console.log('test', newFavorites);
  function removeFavorite(removedPokemon) {
    const remainingFavorites = newFavorites.filter(
      (pokemon) => pokemon.name !== removedPokemon.name
    );
    setNewFavorites(remainingFavorites);
  }*/
  setFavorites(1);
  return (
    <>
      <ImgWrapper>
        <img src={pokemonLogo} alt="Pokemon Logo" />
      </ImgWrapper>
      <HeadlineOne>Cards</HeadlineOne>
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
                onClick={() => removeFavorite(pokemon)}
                src={pokeball}
                alt="Pokeball"
                width="30"
              />
            </ImgWrapper>
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

const Img = styled.img`
  opacity: 1;
`;
