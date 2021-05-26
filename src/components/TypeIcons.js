import styled from 'styled-components/macro';
import bugIcon from '../assets/images/Pokémon_Bug_Type_Icon.svg';
import fireIcon from '../assets/images/Pokémon_Fire_Type_Icon.svg';
import psychicIcon from '../assets/images/Pokémon_Psychic_Type_Icon.svg';
import dragonIcon from '../assets/images/Pokémon_Dragon_Type_Icon.svg';
import electricIcon from '../assets/images/Pokémon_Electric_Type_Icon.svg';
import fightingIcon from '../assets/images/Pokémon_Fighting_Type_Icon.svg';
import ghostIcon from '../assets/images/Pokémon_Ghost_Type_Icon.svg';
import grassIcon from '../assets/images/Pokémon_Grass_Type_Icon.svg';
import groundIcon from '../assets/images/Pokémon_Ground_Type_Icon.svg';
import iceIcon from '../assets/images/Pokémon_Ice_Type_Icon.svg';
import normalIcon from '../assets/images/Pokémon_Normal_Type_Icon.svg';
import poisonIcon from '../assets/images/Pokémon_Poison_Type_Icon.svg';
import rockIcon from '../assets/images/Pokémon_Rock_Type_Icon.svg';
import waterIcon from '../assets/images/Pokémon_Water_Type_Icon.svg';

export default function TypeIcons({ onShowAll, onFilterTypes }) {
  return (
    <FilterWrapper>
      <ButtonWrapper>
        <Button onClick={onShowAll}>SHOW ALL POKEMON</Button>
      </ButtonWrapper>
      <IconWrapper>
        <IconImage
          src={bugIcon}
          alt='Bug Type Icon'
          width='50'
          onClick={() => onFilterTypes('bug')}
        />
        <IconImage
          src={fireIcon}
          alt='Fire Type Icon'
          width='50'
          onClick={() => onFilterTypes('fire')}
        />
        <IconImage
          src={psychicIcon}
          alt='Psychic Type Icon'
          width='50'
          onClick={() => onFilterTypes('psychic')}
        />
        <IconImage
          src={dragonIcon}
          alt='Dragon Type Icon'
          width='50'
          onClick={() => onFilterTypes('dragon')}
        />
        <IconImage
          src={electricIcon}
          alt='Electric Type Icon'
          width='50'
          onClick={() => onFilterTypes('electric')}
        />
        <IconImage
          src={fightingIcon}
          alt='Fighting Type Icon'
          width='50'
          onClick={() => onFilterTypes('fighting')}
        />
        <IconImage
          src={ghostIcon}
          alt='Ghost Type Icon'
          width='50'
          onClick={() => onFilterTypes('ghost')}
        />

        <IconImage
          src={grassIcon}
          alt='Grass Type Icon'
          width='50'
          onClick={() => onFilterTypes('grass')}
        />
        <IconImage
          src={groundIcon}
          alt='Ground Type Icon'
          width='50'
          onClick={() => onFilterTypes('ground')}
        />
        <IconImage
          src={iceIcon}
          alt='Ice Type Icon'
          width='50'
          onClick={() => onFilterTypes('ice')}
        />
        <IconImage
          src={normalIcon}
          alt='Normal Type Icon'
          width='50'
          onClick={() => onFilterTypes('normal')}
        />
        <IconImage
          src={poisonIcon}
          alt='Poison Type Icon'
          width='50'
          onClick={() => onFilterTypes('poison')}
        />
        <IconImage
          src={rockIcon}
          alt='Rock Type Icon'
          width='50'
          onClick={() => onFilterTypes('rock')}
        />
        <IconImage
          src={waterIcon}
          alt='Water Type Icon'
          width='50'
          onClick={() => onFilterTypes('water')}
        />
      </IconWrapper>
    </FilterWrapper>
  );
}

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
