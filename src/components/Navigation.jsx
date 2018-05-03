import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div className={"hamburger-btn" + (this.state.isOpen ? " open" : "")} onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recentwork">Recent Work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;
