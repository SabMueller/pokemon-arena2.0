import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components/macro';
import Modal from 'react-modal';
import professorOak from './images/professor-oak.png';
import pokemonLogo from './images/pokemon-logo.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Header>
      <NavigationStyle>
        <NavLink activeClassName="active" className="link" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/favorites">
          Favorites
        </NavLink>
        <NavLink
          activeClassName="active"
          className="link"
          to="/arena"
          onClick={toggleModal}
        >
          Arena
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Arena Introduction"
          >
            <ModalWrapper>
              <ModalContentWrapper>
                <LogoWrapper>
                  <img src={pokemonLogo} alt="Pokemon Logo" />
                </LogoWrapper>
                <HeadlineOne>Arena</HeadlineOne>
                <p>
                  "Hello there! Welcome to the world of <span>POKEMON</span>! My
                  name is OAK! People call me the <span>POKEMON PROF</span>!
                  This world is inhabited by creatures called{' '}
                  <span>POKEMON</span>! For some people, <span>POKEMON</span>{' '}
                  are pets. Others use them for fights. Myself...I study{' '}
                  <span>POKEMON </span> as a profession."
                </p>
                <p>
                  "Oh! It seems like you found <span> 4 POKEBALLS</span>! Quick,
                  close this info box and click on them to reveal the{' '}
                  <span>POKEMON you've caught!</span>"
                </p>
              </ModalContentWrapper>
              <img src={professorOak} alt="Professor Oak" />
            </ModalWrapper>
            <ButtonWrapper>
              <Button onClick={toggleModal}>CHECK OUT YOUR POKEBALLS!</Button>
            </ButtonWrapper>
          </Modal>
        </NavLink>
      </NavigationStyle>
    </Header>
  );
}

const Header = styled.header`
  background-color: #3b4d7946;
  padding: 2rem;
  box-shadow: 0.5px 0.5px 2px black;
  margin-bottom: 2rem;
`;

const NavigationStyle = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  text-align: center;

  .link {
    position: relative;
    padding: 20px 50px;
    text-decoration: none;
    color: #fff;
    font-family: 'Bangers', cursive;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0.2);
    border-radius: 20px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    xheight: 100%;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    xheight: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  .active {
    background-color: var(--blue);
    color: black;
  }

  .link:hover {
    background-color: #2a75bb;
  }
`;

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
