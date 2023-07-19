import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.svg"

function NavBar() {

  return (
      <nav className="navbar has-shadow is-black is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
              <span className="is-size-4">Musante E-commers</span>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarOptions">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarOptions" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
            <a className="navbar-item">
              Female
            </a>
            <a className="navbar-item">
              Male
            </a>
            <a className="navbar-item">
              Full Catalog
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">
              <CartWidget />
            </a>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;