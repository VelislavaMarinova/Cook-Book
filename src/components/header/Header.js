import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';



const Header = ({ }) => {
  const { isAuthenticated, userEmail, isFormActive } = useContext(AuthContext)

  return (
    <header id="site-header">
      {/* Navigation */}
      <nav className="navbar">
        <section className="navbar-dashboard">
          <Link to="/">Dashboard</Link>
          {/* Guest users */}
          {!isAuthenticated && (

            <div id="guest">
              <Link className="button" to="/login">
                Login
              </Link>
              <Link className="button" to="/register">
                Register
              </Link>
            </div>
          )}
          {/* Logged-in users */}
          {isAuthenticated &&
            (
              <div id="user">
                <span>
                  Welcome, {userEmail}
                </span>
                <Link className="button" to="/catalog">
                  All Recipes
                </Link>
                <Link className="button" to="#">
                  My Recipes
                </Link>

                <Link className="button" to="/create-recipe">
                  Add Recipes
                </Link>
                <Link className="button" to="/logout">
                  Logout
                </Link>
              </div>
            )}

        </section>
      </nav>
    </header>
  )
};

export default Header;