import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink activeClassName="active" className="link" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/favorites">
          Favorites
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/arena">
          Arena
        </NavLink>
      </nav>
    </header>
  );
}
