import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="orange darken-4">
        <div className="nav-wrapper container">
          <Link
            to="/" className="brand-logo left"
          >
            SPA
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };
