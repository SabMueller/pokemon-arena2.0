import styled from 'styled-components/macro';
import pokeball from './images/pokeball.svg';

export default function PokemonCards({ pokemon, onToggleFavorites }) {
  return (
    <PokemonWrapper>
      {pokemon.map((pokemon, index) => (
        <PokemonCard key={index}>
          <h3>
            #{pokemon.id} {` `}
            {pokemon.name.toUpperCase()}
          </h3>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt='Pokemon Profile'
            width='150'
          />
          <ImgWrapper>
            <Img
              onClick={() => onToggleFavorites(pokemon)}
              src={pokeball}
              alt='Pokeball'
              width='30'
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
  );
}

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
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
