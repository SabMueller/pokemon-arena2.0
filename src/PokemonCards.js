import styled from 'styled-components/macro';
import PokemonCard from './PokemonCard';

export default function PokemonCards({ pokemon, onToggleFavorites }) {
  return (
    <PokemonWrapper>
      {pokemon.map((pokemon, index) => (
        <PokemonCard
          onToggleFavorites={onToggleFavorites}
          key={index + pokemon}
          pokemon={pokemon}
        />
      ))}
    </PokemonWrapper>
  );
}

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
