import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components/macro';
import ArenaModal from './ArenaModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Header>
      <NavigationStyle>
        <NavLink activeClassName='active' className='link' exact to='/'>
          Home
        </NavLink>
        <NavLink activeClassName='active' className='link' to='/favorites'>
          Favorites
        </NavLink>
        <NavLink
          activeClassName='active'
          className='link'
          to='/arena'
          onClick={toggleModal}>
          Arena
          <ArenaModal onToggleModal={toggleModal} isOpen={isOpen} />
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
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
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
