import React from 'react';

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <li className="nav-items">
              <a href="#">About</a>
            </li>
            <li className="nav-items">
              <a href="#">Shop</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
