// Custom Comp
import React from 'react';
import Menu from '../Menu/Menu';

// Functional Comp with Named Function 
function Header() {
  // returning JSX - 
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          My Fav Program App!</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <Menu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
