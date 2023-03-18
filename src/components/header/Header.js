
import './Header.css'

const Header = () => {
    return(
        <header id="site-header">
        {/* Navigation */}
        <nav className="navbar">
          <section className="navbar-dashboard">
            <a href="#">Dashboard</a>
            {/* Guest users */}
            <div id="guest">
              <a className="button" href="#">
                Login
              </a>
              <a className="button" href="#">
                Register
              </a>
            </div>
            {/* Logged-in users */}
            {/* <div id="user">
              <span>
                Welcome, {"{"}email{"}"}
              </span>
              <a className="button" href="#">
                My Books
              </a>
              <a className="button" href="#">
                Add Book
              </a>
              <a className="button" href="#">
                Logout
              </a>
            </div> */}
          </section>
        </nav>
      </header>
    )
};

export default Header;