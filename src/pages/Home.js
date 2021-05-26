import styled from 'styled-components/macro';
import TypeIcons from '../components/TypeIcons';
import PokemonCards from '../components/PokemonCards';
import pokemonLogo from '../assets/images/pokemon-logo.svg';

export default function Home({
  pokemon,
  onShowAll,
  onFilterTypes,
  onToggleFavorites,
}) {
  return (
    <>
      <ImgWrapper>
        <img src={pokemonLogo} alt='Pokemon Logo' />
      </ImgWrapper>
      <HeadlineOne>First Generation</HeadlineOne>
      <TypeIcons onShowAll={onShowAll} onFilterTypes={onFilterTypes} />
      <PokemonCards pokemon={pokemon} onToggleFavorites={onToggleFavorites} />
    </>
  );
}

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
