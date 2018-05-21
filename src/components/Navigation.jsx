import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import WithAnimation from './HOC/WithAnimation';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({
      isOpen: !this.state.isOpen
    }));
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default WithAnimation(Navigation, 'SlideDown', 600, 600, 600);
