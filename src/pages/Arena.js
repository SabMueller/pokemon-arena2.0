import styled, { keyframes } from 'styled-components/macro';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import pokemonLogo from '../assets/images/pokemon-logo.svg';
import cloud from '../assets/images/cloud.svg';
import levelUp from '../assets/sound/letsgo.mp3';
import pokimons from '../assets/sound/pokimons.mp3';

export default function Arena({ pokemon, storage }) {
  const [hiddenPokemon, setHiddenPokemon] = useState(
    storage.length >= 1 ? storage.slice() : pokemon.slice()
  );

  const [PokemonSound] = useSound(levelUp, { volume: 0.25 });
  const [newPokemonSound] = useSound(pokimons, { volume: 0.15 });

  useEffect(() => {
    const shuffledPokemon = shuffleArray(hiddenPokemon).slice(0, 4);
    setHiddenPokemon(shuffledPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function togglePokemonVisibility(pokemonToToggle) {
    const visiblePokemon = hiddenPokemon.map((pokemon) => {
      if (pokemon.id === pokemonToToggle.id) {
        pokemon.isSelected = !pokemon.isSelected;
      }
      return pokemon;
    });
    setHiddenPokemon(visiblePokemon);
  }

  function revealPokemon(pokemon) {
    return (
      <>
        <h3>{pokemon.name.toUpperCase()}</h3>
        <Cloud src={cloud} />
        <PokemonImage
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt='Pokemon Profile'
          className='pokemon-profile-pic'></PokemonImage>
      </>
    );
  }

  return (
    <>
      <LogoWrapper>
        <img src={pokemonLogo} alt='Pokemon Logo' />
      </LogoWrapper>
      <HeadlineOne onClick={newPokemonSound}>Arena</HeadlineOne>
      <PokemonWrapper>
        {hiddenPokemon.map((pokemon, index) => (
          <PokemonArea key={index}>
            <div className='pokemon'>
              <Pokeball
                onClick={() => togglePokemonVisibility(pokemon)}
                onMouseDown={PokemonSound}
              />
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

const tinUpIn = keyframes`
0% {
    opacity: 0;
    transform: scale(1, 1) translateY(-900%);
  }

  50%,
  70%,
  90% {
    opacity: 0;
    transform: scale(1.1, 1.1) translateY(0);
  }

  60%,
  80%,
  100% {
    opacity: 1;
    transform: scale(2) translateY(0);
  }
`;

const TwisterIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }

  30% {
    transform-origin: 100% 0;
    transform: scale(0, 0) rotate(360deg) translateY(100%);
  }

  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: scale(1.5) rotate(0deg) translateY(0);
  }
`;

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  h3 {
    animation: ${tinUpIn} 3.6s ease-in;
    color: var(--red);
    text-shadow: 1px 1px 2px black;
    font-family: 'Bangers', cursive;
    font-size: 2.5rem;
    z-index: 160;
    letter-spacing: 0.2rem;
  }
`;

const swashIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }

  90% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }

  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
`;

const Cloud = styled.img`
  animation: ${swashIn} 0.5s ease-out;
  position: absolute;
  bottom: 65%;
  z-index: 140;
  width: 11.875rem;
`;

const PokemonImage = styled.img`
  animation: ${TwisterIn} 1.5s ease-in;
  position: absolute;
  padding: 1rem;
  bottom: 50%;
  width: 15.625rem;
  z-index: 150;
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
  cursor: pointer;
`;

const PokemonWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 5rem;

  background: rgb(236, 236, 236);
  border: 1px solid hsl(210, 15%, 89%);
  border-radius: 2rem;
  filter: drop-shadow(0 0.125rem 0.75rem hsla(213, 53%, 20%, 0.308));
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  width: 80%;
`;

const PokemonArea = styled.article`
  position: relative;
  display: flex;
`;

const wiggle = keyframes`
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
`;

const antiWiggle = keyframes`  
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
  //animation:${(props) => (props.inactive ? swashOut : null)}

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
    animation: ${antiWiggle} 1s ease-in-out;
  }

  &:hover:after {
    animation: ${wiggle} 1s ease-in-out;
  }

  &:focus,
  &:active {
    outline: 0;
  }
`;

const swashOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }

  80% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(0.9, 0.9);
  }

  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
`;

/* const spaceInUp = keyframes`
  from{
    opacity: 0;
    transform-origin: 50% 0%;
    transform: scale(0.2) translate(0%, -200%);
  }

  to {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: scale(2) translate(0%, 0%) rotate(1turn);
  }
`; */
