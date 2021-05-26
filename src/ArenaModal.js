import Modal from 'react-modal';
import styled from 'styled-components/macro';
import professorOak from './images/professor-oak.png';
import pokemonLogo from './images/pokemon-logo.svg';

export default function ArenaModal({ isOpen, onToggleModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onToggleModal}
      contentLabel='Arena Introduction'>
      <ModalWrapper>
        <ModalContentWrapper>
          <LogoWrapper>
            <img src={pokemonLogo} alt='Pokemon Logo' />
          </LogoWrapper>
          <HeadlineOne>Arena</HeadlineOne>
          <p>
            "Hello there! Welcome to the world of <span>POKEMON</span>! My name
            is OAK! People call me the <span>POKEMON PROF</span>! This world is
            inhabited by creatures called <span>POKEMON</span>! For some people,{' '}
            <span>POKEMON</span> are pets. Others use them for fights.
            Myself...I study <span>POKEMON </span> as a profession."
          </p>
          <p>
            "Oh! It seems like you found <span> 4 POKEBALLS</span>! Quick, close
            this info box and click on them to reveal the{' '}
            <span>POKEMON you've caught!</span>"
          </p>
        </ModalContentWrapper>
        <img src={professorOak} alt='Professor Oak' />
      </ModalWrapper>
      <ButtonWrapper>
        <Button onClick={onToggleModal}>CHECK OUT YOUR POKEBALLS!</Button>
      </ButtonWrapper>
    </Modal>
  );
}

const ModalWrapper = styled.div`
  padding: 2rem;
  position: relative;
  display: flex;

  img {
    width: 20rem;
    align-self: center;
    display: inline-flex;
  }
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  display: relative;

  p {
    font-size: 1.3rem;
    padding: 1rem;
    line-height: 1.5;
  }

  span {
    font-size: 1.35rem;
    color: var(--blue);
    font-weight: bold;
  }
`;

const ButtonWrapper = styled.div`
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
  cursor: pointer;
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
