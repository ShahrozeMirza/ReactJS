import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-items">
              <Link to="/shop">Shop</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
