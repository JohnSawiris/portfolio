import React from 'react';
import { Link } from 'react-router-dom';

import WithAnimation from './HOC/WithAnimation';

const Navigation = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">about me</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">projects</Link>
      </li>
    </ul>
  </nav>
);
export default WithAnimation(Navigation, 'SlideDown', 600, 600, 600);
