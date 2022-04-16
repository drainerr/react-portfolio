import { NavLink } from 'react-router-dom';
import Resume from '../../Resume.pdf';

const Navbar = (props) => {
  const { getNavbar, setNavbar } = props;
  const handleClick = () => setNavbar((prev) => !prev);
  return (
    <div className={getNavbar ? 'navigation active' : 'navigation'}>
      <NavLink to="/" onClick={handleClick}>
        Home
      </NavLink>
      <NavLink to="/Projects" onClick={handleClick}>
        Projects
      </NavLink>
      <a href={Resume} download onClick={handleClick}>
        Resume
      </a>
      <NavLink to="/About" onClick={handleClick}>
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
