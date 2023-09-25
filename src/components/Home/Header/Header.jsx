import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Details from '../../UserDetails/Details';

const Header = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </nav>
    </div>
  );
};

export default Header;