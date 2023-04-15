import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import logoImg from './tasy.jpg';

const Header = () => {
  const { isAuthenticated, firstName, lastName } = useAuthContext();

  return (
    <header className="header">
      {/* Navigation */}
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className='header__logo'>
            <Link to="/"><img src={logoImg} alt="tastyImg" /></Link>
          </div>
          <ul className="nav__elements">

            {/* Guest users */}
            {!isAuthenticated && (
              <>
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
            {/* Logged-in users */}
            {isAuthenticated && (
              <>
                <li>
                  Welcome, {firstName} {lastName}
                </li>

                <li>
                  <Link to="/catalog">
                    All Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/myRecipes">
                    My Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/create">
                    Add New Recipe
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>

        </section>
      </nav>
    </header>
  )
};

export default Header;