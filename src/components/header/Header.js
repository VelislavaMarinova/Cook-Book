import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';



const Header = ({ }) => {
  const { isAuthenticated, firstName, lastName } = useContext(AuthContext)

  return (
    <header className="header">
      {/* Navigation */}
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className='header__logo'>
            <Link to="/"><img src="./images/tasy.jpg" alt="tastyImg" /></Link>
          </div>
          <ul role='list' className="nav__elements">

            {/* Guest users */}
            {!isAuthenticated && (
              <>
                <li>
                  <Link  to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link  to="/register">
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
                  <Link to="#">
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