import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <header id="site-header">
        {/* Navigation */}
        <nav className="navbar">
          <section className="navbar-dashboard">
            <Link to="/">Dashboard</Link>
            {/* Guest users */}
            <div id="guest">
              <Link className="button" to="/login">
                Login
              </Link>
              <Link className="button" to="/register">
                Register
              </Link>
            </div>
            {/* Logged-in users */}
            <div id="user">
              <span>
                Welcome, {"{"}email{"}"}
              </span>
              <a className="button" href="#">
                My Books
              </a>
              <Link className="button" to="/create">
                Add Book
              </Link>
              <a className="button" href="#">
                Logout
              </a>
            </div>
          </section>
        </nav>
      </header>
    )
};

export default Header;