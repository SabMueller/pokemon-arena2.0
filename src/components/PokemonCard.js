import styled from 'styled-components/macro';
import pokeball from '../assets/images/pokeball.svg';

export default function PokemonCard({ pokemon, onToggleFavorites }) {
  return (
    <StyledPokemonCard>
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
    </StyledPokemonCard>
  );
}

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const StyledPokemonCard = styled.div`
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
