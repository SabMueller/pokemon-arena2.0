import styled from 'styled-components/macro';
//import { useSpring, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import pokemonLogo from './images/pokemon-logo.svg';

export default function Arena({ pokemon }) {
  useEffect(() => {
    alert(
      `You found 4 pokeballs...Click on them to reveal which pokemons are in it and add them to your arena team!`
    );
  }, []);

  const pokemonCopy = pokemon.slice();
  /*      const shuffledPokemon = shuffleArray(pokemonCopy).slice(0, 4); */

  const [hiddenPokemons, setHiddenPokemons] = useState([]);

  useEffect(() => {
    const shuffledPokemon = shuffleArray(pokemonCopy).slice(0, 4);
    setHiddenPokemons(shuffledPokemon);
  }, []);

  function togglePokemonVisibility(pokemonToToggle) {
    const visiblePokemon = hiddenPokemons.map((pokemon) => {
      if (pokemon.id === pokemonToToggle.id) {
        pokemon.isSelected = !pokemon.isSelected;
      }
      return pokemon;
    });
    setHiddenPokemons(visiblePokemon);
  }

  function revealPokemon(pokemon) {
    return (
      <>
        <h3>{pokemon.name.toUpperCase()}</h3>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt="Pokemon Profile"
          width="150"
        ></img>
      </>
    );
  }

  return (
    <>
      <LogoWrapper>
        <img src={pokemonLogo} alt="Pokemon Logo" />
      </LogoWrapper>
      <HeadlineOne>Arena</HeadlineOne>
      <PokemonWrapper>
        {hiddenPokemons.map((pokemon, index) => (
          <PokemonArea key={index}>
            <div className="pokemon">
              <Pokeball onClick={() => togglePokemonVisibility(pokemon)} />
              <ImgWrapper>
                {pokemon.isSelected ? revealPokemon(pokemon) : null}
              </ImgWrapper>
            </div>
          </PokemonArea>
        ))}
      </PokemonWrapper>
    </>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const LogoWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const HeadlineOne = styled.h1`
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

  background: rgb(236, 236, 236);
  border: 1px solid hsl(210, 15%, 89%);
  border-radius: 2rem;
  filter: drop-shadow(0 2px 0.75rem hsla(213, 53%, 20%, 0.308));
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  width: 80%;
`;

const PokemonArea = styled.article`
  position: relative;
  display: flex;
`;

const Pokeball = styled.div`
    margin: 20px;
    width: 100px;
    height: 100px;
    background: var(--red);
    border-radius: 50%;
    box-shadow: inset 0 -72px 0 -37px #fff, inset 0 -76px 0 -35px #000,
      0 0 0 5px #000;
    position: relative;
    transition: 0.4s;
    transform-origin: bottom center;
    z-index: 140;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #535353;
    top: 50px;
    left: 40px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 2px 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 5px #fff, 0 0 0 10px #000;
    z-index: 100;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset -7px 0 5px 0 rgba(0, 0, 0, 0.4);
    z-index: 100;
  }

  &:hover {
    cursor: pointer;
    animation: anti-wiggle 1s ease-in-out;
  }

  &:hover:after {
    animation: wiggle 1s ease-in-out;
  }

  &:focus,
  &:active {
    outline: 0;
  }

  @keyframes wiggle {
    20% {
      box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(7deg);
    }

    40% {
      box-shadow: inset -11px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(-14deg);
    }

    60% {
      box-shadow: inset -5px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(4deg);
    }

    80% {
      box-shadow: inset -8px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(-2deg);
    }

    100% {
      box-shadow: inset -7px 0 5px 0 rgba(0, 0, 0, 0.4);
      transform: rotate(0deg);
    }
  }

  @keyframes anti-wiggle {
    20% {
      transform: translateX(4px) rotate(-7deg);
    }

    40% {
      transform: translateX(-8px) rotate(14deg);
    }

    60% {
      transform: translateX(2px) rotate(-4deg);
    }

    80% {
      transform: translateX(-1px) rotate(2deg);
    }

    100% {
      transform: translateX(0px) rotate(0deg);
    }
  }
`;
